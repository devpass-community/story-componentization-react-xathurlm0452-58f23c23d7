import React, { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Empty from "./components/Empty";
import DogItem from "./components/DogItem";
import Button from "./components/Button";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dogImages, setDogImages] = useState([]);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((json) => {
        setBreeds(Object.keys(json.message));
      });
  }, []);

  const searchByBreed = () => {
    setIsLoading(true);
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          setIsLoading(false);
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((json) => {
        setIsLoading(false);
        setDogImages(json.message);
      });
  };

  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <header>
        <h1 className="mt-4 mb-5">Pawspective 🐶</h1>
      </header>
      <main role="main">
        <div className="d-flex justify-content-center">
          <select
            className="form-select w-25"
            aria-label="Select a breed of dog to display results"
            value={selectedBreed}
            onChange={(event) => setSelectedBreed(event.target.value)}
          >
            <option value="" disabled>
              Select a breed
            </option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <Button disabled={!selectedBreed} onClick={searchByBreed}/>
        </div>
        {dogImages.length > 0 && !isLoading && (
          <div className="px-5 mx-5 text-end" data-testid="results-count">
            <p className="fs-5">{dogImages.length} results</p>
          </div>
        )}
        <div className="mt-5 d-flex justify-content-center flex-wrap px-5 mx-5">
          {dogImages.length === 0 && !isLoading && (
            <Empty/>
          )}
          {isLoading && (
            <Loading/>
          )}
          {dogImages.length > 0 &&
            !isLoading &&
            dogImages.map((imgSrc, index) => (
              <DogItem imgSrc={imgSrc} alt={`${selectedBreed} ${index + 1} of ${dogImages.length}`}/>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;

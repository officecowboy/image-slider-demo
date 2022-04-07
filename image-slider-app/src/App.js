import "./App.css";
import React, { useState } from "react";
import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
import { ReactComponent as NextArrow } from "./assets/arrow-right.svg";
let url = "https://api.unsplash.com/topics/experimental/photos/?client_id=hjI8EnFur9yTS8YMMiJ5lKfyY5vS21n3OMguS1EGxew"

const images = []

fetch(url)
  .then(res => res.json())
  .then(data => {
    images.push(data.map(image => image.urls.regular))
  })
  .catch(err => {
    console.log('caught it!', err);
  });

console.log(images)

function App() {

  const [currentImage, setCurrentImage] = useState(0);

  const handleBack = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((currentImage) => currentImage - 1);
    }
  };

  const handleNext = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((currentImage) => currentImage + 1);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Digital Images</h1>
        <h2>
          Gallery created with React.js and the Unsplash API
        </h2>
      </header>

      <figure>
        <nav>
          <BackArrow onClick={handleBack} />
          <NextArrow onClick={handleNext} />
        </nav>
        <figcaption>
        </figcaption>
        <img alt="" src={images[currentImage]} />
      </figure>

    </div>
  );
}

export default App;

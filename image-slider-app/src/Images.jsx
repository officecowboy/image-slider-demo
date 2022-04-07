import React, { useEffect, useState } from "react";
import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
import { ReactComponent as NextArrow } from "./assets/arrow-right.svg";

let Images = () => {
  const [images, setImages] = useState([])

  const apiCall = () => {
    fetch(`https://api.unsplash.com/topics/experimental/photos/?client_id=hjI8EnFur9yTS8YMMiJ5lKfyY5vS21n3OMguS1EGxew`)
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(error => console.error(error, "error"))
  }

  useEffect(() => {
    apiCall()
  }, [])

  let imageURL = []
  imageURL.push(images.map(image => image.urls.regular))

  console.log(imageURL)

  const [currentImage, setCurrentImage] = useState(0)

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
  }

  return (
    <figure>
      <nav>
        <BackArrow onClick={handleBack} />
        <NextArrow onClick={handleNext} />
      </nav>
      <figcaption>
      </figcaption>
      <img alt="" src={imageURL[currentImage]} />
    </figure>
  )
}

export default Images

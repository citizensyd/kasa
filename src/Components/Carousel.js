import React, { useState, useEffect } from "react";
import Fleche from "../images/arrow_forward_ios-24px 1.svg";

function Carousel({ oneLocation }) {
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        setImages(oneLocation.pictures);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, [oneLocation]);

  function handlePrevClick() {
    setCounter((prevCounter) =>
      prevCounter === 0 ? images.length - 1 : prevCounter - 1
    );
  }

  function handleNextClick() {
    setCounter((prevCounter) =>
      prevCounter === images.length - 1 ? 0 : prevCounter + 1
    );
  }

  return (
    <section className="carousel-container">
      <button id="prevBtn" onClick={handlePrevClick}>
        <img src={Fleche} alt="Previous" />
      </button>
      <button id="nextBtn" onClick={handleNextClick}>
        <img src={Fleche} alt="Next" />
      </button>
      <div className="carousel-slide">
        {images.length > 0 && (
          <img key={counter} src={images[counter]} alt="Carousel" />
        )}
      </div>
    </section>
  );
}

export default Carousel;

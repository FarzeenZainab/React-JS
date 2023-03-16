import React, { useState } from "react";

function Slides({ slides }) {
  const [currSlide, setCurrSlide] = useState(0);
  const LastSlide = slides.length - 1;

  const nextSlide = () => {
    setCurrSlide((currSlide) => {
      return currSlide + 1;
    });
  };

  const prevSlide = () => {
    setCurrSlide((currSlide) => {
      return currSlide - 1;
    });
  };

  const restart = () => {
    setCurrSlide(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="outlined small" onClick={restart}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={prevSlide} disabled={currSlide === 0 ? true : false}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={nextSlide} disabled={currSlide === LastSlide ? true : false}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currSlide].title}</h1>
        <p data-testid="text">{slides[currSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;

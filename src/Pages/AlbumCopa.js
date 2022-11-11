import React, { createContext, useEffect, useState } from "react";
import { getImages } from "../components/SliderCopa/ImagesApi.js";
import PropTypes from "prop-types";
import Arrows from "../components/SliderCopa/Controls/Arrows.js";
import Dots from "../components/SliderCopa/Controls/Dots.js";
import Slide from "../components/SliderCopa/Slide.js";
import "./AlbumCopa.css";

export const SliderContext = createContext();

function AlbumCopa({ width, height, autoPlay, autoPlayTime }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const images = await getImages();
      setItems(images);
    };
    loadData();
  }, []);

  const preloadImages = () => {
    const prevItemIndex = slide - 1 < 0 ? items.length - 1 : slide - 1;
    const nextItemIndex = (slide + 1) % items.length;

    new Image().src = items[slide].url;
    new Image().src = items[prevItemIndex].url;
    new Image().src = items[nextItemIndex].url;
  };

  useEffect(() => {
    if (items.length) {
      preloadImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, items]);

  const changeSlide = (direction = 1) => {
    setAnimation(false);

    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  };

  const goToSlide = (number) => {
    setAnimation(false);
    setSlide(number % items.length);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, slide]);

  return (
    <div
      className="container" // slider
      style={{ width, height }}
    >
      <section id="header" className="text-center">
        <h3 className="title" title="Album da Copa 2022">
          &gt; Album - Copa 2022
        </h3>
      </section>

      <div className="slider">
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: IntersectionObserver.length,
            slideNumber: slide,
          }}
        >
          <Arrows />
          {items.length ? (
            <Slide data={items[slide]} animation={animation} />
          ) : null}
          <Dots />
        </SliderContext.Provider>
      </div>
    </div>
  );
}

AlbumCopa.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

AlbumCopa.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
};

export default AlbumCopa;

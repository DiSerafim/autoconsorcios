import React from "react";
import SlideImage from "./SlideImage.js";
import "./Slide.css";

export default function Slide({ data: { url, title }, animation }) {
  return (
    <div className={`slide ${animation && "fade"}`}>
      <SlideImage src={url} alt={title} />
    </div>
  );
}

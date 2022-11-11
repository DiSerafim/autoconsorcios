import React, { useContext } from "react";
import { SliderContext } from "../../../Pages/Empresa";
import * as ArrowIcon from "react-icons/bs";
import "./Arrows.css";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow-left" onClick={() => changeSlide(-1)}>
        <ArrowIcon.BsFillArrowLeftCircleFill />
      </div>
      <div className="arrow-right" onClick={() => changeSlide(1)}>
        <ArrowIcon.BsFillArrowRightCircleFill />
      </div>
    </div>
  );
}

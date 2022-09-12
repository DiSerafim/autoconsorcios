import React from "react";
import SlideTitle from './SlideTitle';
import SlideImage from './SlideImage';
import './Slide.css';

export default function Slide({ data: { url, title }, animation }) {
    return (
        <div className={`slide ${animation && 'fade'}`}>
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    );
}
import React from "react";
import SlideTitle from './SlideTitle.js';
import SlideImage from './SlideImage.js';

import './Slide.css';

export default function Slide({ data: { url, title }, animation }) {
    return (
        <div className={`slide ${animation && 'fadeInAnimation'}`}>
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    );
}
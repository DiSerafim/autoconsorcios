import React from 'react';
import './SlideImage.css';

export default function SlideImage({ src, alt }) {
    return <img src={src} alt={alt} className='slide-image' />
}
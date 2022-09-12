import React, { useContext } from 'react';
import Slide from './Slide';
import { SliderContext } from '../../Pages/Empresa';
import './SlidesList.css';

export default function SlidesList() {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className='slide-list'
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            <h5>Lista de slides</h5>
            {items.map((slide, index) => (
                <Slide key={index} data={slide} />
            ))}
        </div>
    );
}
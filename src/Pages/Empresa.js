import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { getImages } from '../img/imagesApi';
import Arrows from '../components/SliderEmpresa/Controls/Arrows.js';
import Dots from '../components/SliderEmpresa/Controls/Dots.js';
import Slide from '../components/SliderEmpresa/Slide';
import './Empresa.css';

export const SliderContext = createContext();

// Componente de constrole deslizante
const Empresa = function ({ width, height, autoPlay, autoPlayTime }) {
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
        const prevItemIndex = slide -1 < 0 ? items.length - 1 : slide - 1;
        const nextItemIndex = (slide + 1) % items.length;

        new Image().src = items[slide].url;
        new Image().src = items[prevItemIndex].url;
        new Image().src = items[nextItemIndex].url;
    }

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
            setAnimation(true)
        }, 0);

        return () => {
            clearTimeout(timeout)
        }
    };

    const goToSlide = (number) => {
        setAnimation(false);
        setSlide(number % items.length);

        const timeout = setTimeout(() => {
            setAnimation(true);
        }, 0);

        return () => {
            clearTimeout(timeout)
        }
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
            className='container' // slider
            style={{ width, height }}
        >
            <section id='header' className='text-center'>
                <h3 className='title' title='Sobre nós'>&gt; Empresa </h3>
            </section>
            
            <div className='slider'>
                <SliderContext.Provider
                    value={{
                        goToSlide,
                        changeSlide,
                        slidesCount: items.length,
                        slideNumber: slide,
                    }}
                >
                    <Arrows />
                    {
                        items.length 
                            ? (<Slide data={items[slide]} animation={animation} />)
                            : null
                    }
                    <Dots />
                </SliderContext.Provider>
            </div>
        </div>
    );
};

Empresa.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
};

Empresa.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%",
}

export default Empresa;
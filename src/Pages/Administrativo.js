import React, { useState } from 'react';
import './Administrativo.css';
import Modal from '../components/Modal/Modal.js';
import { modalData } from '../components/Modal/ModalData';


function Administrativo() {
    const [openImg, setOpenImg] = useState(false);
    const [openTitle, setOpenTitle] = useState(false);
    const [openText, setOpenText] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(false);

    const handleClick = (item, index) => {
        setOpenImg(item.img);
        setOpenTitle(item.title);
        setOpenText(item.text);
    };

    const rotationRight = () => {
        const totalLength = modalData.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = modalData[0].img;
            setOpenImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = modalData.filter((item) => {
            return modalData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].img;
        setOpenImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title'>Início &gt; Administrativo</h3>
            </section>

            <section className='galery'>
                <div className='products-container'>
                    {modalData.map((item, index) => (
                            <div data-target={index} key={index} className={item.cName}>
                                <img src={item.img} alt={item.title} onClick={ () => handleClick(item, index) } />
                                <h3 className='card-title'>{item.title}</h3>
                                <p className='cart-text'>{item.text}</p>
                                <span onClick={ () => handleClick(item, index) }>Ver notícia &gt;&gt;</span>
                            </div>
                        )
                    )}
                    {openImg
                        ? (<Modal
                            openImg={openImg}
                            openTitle={openTitle}
                            openText={openText}
                            onClose={() => setOpenImg(false)}
                            setOpenImg={setOpenImg}
                            rotationRight={rotationRight}
                        ></Modal>)
                        : null
                    }
                </div>
            </section>
        </div>
    );
}

export default Administrativo;
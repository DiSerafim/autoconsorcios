import React, { useState } from 'react';
import './Home.css';
import Modal from '../components/Modal/Modal.js';
import { modalData } from '../components/Modal/ModalData';


function Home() {
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
        if (currentIndex +1 >= totalLength) {
            setCurrentIndex(0);
            const newImg = modalData[0].img;
            // const newTitle = modalData[0].title;
            setOpenImg(newImg);
            // setOpenTitle(newTitle);
            return;
        }
        const newIndex = currentIndex + 1;
        const newImg = modalData.filter((item) => {
            return modalData.indexOf(item) === newIndex;
        });
        const newItemImg = newImg[0].img;
        const newItemTitle = newImg[0].title;
        const newItemText = newImg[0].text;
        setOpenImg(newItemImg);
        setOpenText(newItemText);
        setOpenTitle(newItemTitle);
        setCurrentIndex(newIndex);
    }

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Página de notícias'>Início &gt; Notícias</h3>
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

export default Home;
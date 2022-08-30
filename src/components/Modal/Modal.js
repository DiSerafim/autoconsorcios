import React from 'react';
import './Modal.css';

const Modal = ({ id = 'modal',onClose = () => {}, openImg, openText, openTitle, rotationRight, setOpenImg }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    }
    const closeX = (e) => {
        if (e.target.classList.contains('fechar')) {
            setOpenImg(null);
        }
    };

    return (
        <div id={id} className='modal' onClick={handleOutsideClick}>
            <div className='.container-modal'>
                <button className='fechar' onClick={closeX} />
                <img src={openImg} alt={openTitle} />
                <h3 className='card-title'>{openTitle}</h3>
                <p className='cart-text'>{openText}</p>
            </div>
        </div>
    );
}

export default Modal;
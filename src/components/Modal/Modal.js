import React from 'react';
import FotoNoticia from '../../img/indice4.jpeg';
import * as FaIcons from "react-icons/fa";
import './Modal.css';

const Modal = ({ children }) => {
    return (
        <div className='modal'>
            <div className='container'>
                <FaIcons.FaWindowClose className='fechar' />
                <button className='fechar' />
                <h1>Modal</h1>
                <img src={FotoNoticia} alt='noticia da empresa' />
                <div className='content'>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
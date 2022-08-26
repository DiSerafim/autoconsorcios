import React, { useState } from 'react';
import './Administrativo.css';
// import FotoNoticia from '../../src/img/indice4.jpeg';
// import FotoNoticia1 from '../../src/img/indice1.jpeg';
// import FotoNoticia2 from '../../src/img/indice2.jpeg';
// import FotoNoticia3 from '../../src/img/indice3.jpeg';
import Modal from '../components/Modal/Modal';

function Administrativo() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title'>Início &gt; Administrativo</h3>
            </section>

            <section className='galery'>
                <div className='products-container'>
                    <div className='card' data-name='c-1' onClick={ () => setOpenModal(true) }>
                        {openModal ? <Modal><h2>Aqui será a modal (children)</h2></Modal> : null}
                        <h3 classNam
                        e='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    {/* <div className='card' data-name='c-2'>
                        <img src={FotoNoticia1} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-3'>
                        <img src={FotoNoticia2} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-4'>
                        <img src={FotoNoticia3} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-5'>
                        <img src={FotoNoticia} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-6'>
                        <img src={FotoNoticia1} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-7'>
                        <img src={FotoNoticia2} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-8'>
                        <img src={FotoNoticia3} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Administrativo;
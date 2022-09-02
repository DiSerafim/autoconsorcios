import React from 'react';
import './Observacao.css';
import FotoNoticia from '../../src/img/indice4.jpeg';
import FotoNoticia1 from '../../src/img/indice1.jpeg';
import FotoNoticia2 from '../../src/img/indice2.jpeg';
import FotoNoticia3 from '../../src/img/indice3.jpeg';
import * as FaIcons from "react-icons/fa";
import './script';
import Header from '../components/Header/Header';

function Home() {
    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Em observação'>&gt; Em observação</h3>
            </section>

            <section className='galery'>
                <Header />
                <div className='products-container'>
                    <div className='card' data-name='c-1'>
                        <img src={FotoNoticia} alt='noticia da empresa' />                            
                        <h3 className='card-title'>Título</h3>
                        <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                        <span>Continuar  leitura &gt;&gt;</span>
                    </div>

                    <div className='card' data-name='c-2'>
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
                    </div>
                </div>
            </section>

            <section className='preview'>
                <div className='preview-card' data-target='c-1'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia1} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-2'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia2} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-3'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia3} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-4'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-5'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia1} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-6'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia2} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-7'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia3} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>

                <div className='preview-card' data-target='c-8'>
                    <FaIcons.FaWindowClose className='fechar' />
                    <img src={FotoNoticia} alt='noticia da empresa' />                            
                    <h3 className='card-title'>Título</h3>
                    <p className='cart-text'>Mensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notíciaMensam da notícia</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
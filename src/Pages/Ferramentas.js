import React from 'react';
import './Ferramentas.css';
import * as MdIcons from 'react-icons/md';

function Ferramentas() {
    return (
        <main className='container'>
            <section id='header' className='text-center'>
                <h3 className='title'>Início &gt; Ferramentas</h3>
            </section>

            <section className='galery-tools'>
                <div className='card'>
                    <MdIcons.MdHdrAuto />
                    <div className='text'>
                        <h3 className='card-title'>Abra seu chamado</h3>
                        <span>&gt;&gt;</span>
                    </div>              
                </div>
            </section>
        </main>
    );
}

export default Ferramentas;
import React from 'react';
import './Chamados.css';
import * as MdIcons from 'react-icons/md';

function Chamados() {
    return (
        <main className='container'>
            <section id='header' className='text-center'>
                <h3 className='title'>Início &gt; Chamados</h3>
            </section>

            <section className='galery-tools'>
                <a href='http://192.168.100.250/glpi/front/central.php' target='_blank' rel="noreferrer">
                    <div className='card'>
                        <MdIcons.MdHdrAuto />
                        <div className='text'>
                            <h3 className='card-title'>Abra seu chamado</h3>
                                <span>&gt;&gt;</span>
                        </div>
                    </div>
                </a>
            </section>
        </main>
    );
}

export default Chamados;
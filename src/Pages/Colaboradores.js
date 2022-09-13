import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import ColaboradorCard from '../components/Colaboradores/ColaboradorCard.js';
import './ColaboradorCard.css';

function Colaboradores() {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Colaboradores'>&gt; Colaboradores</h3>
                    <button onClick={handleLogout}>Sair</button>
            </section>

            <section className='colaboradores'>
                <div className='login'>
                    <ColaboradorCard
                        name="Diego Serafim"
                        age="35"
                        charge="Webdesigner"
                        followers="Whatsapp"
                        likes="803k"
                        photos="1.4k"
                    />
                </div>
                <h6>Usuário autorizado? {String(authenticated)}</h6><br></br>
            </section>
        </div>
    );
}

export default Colaboradores;

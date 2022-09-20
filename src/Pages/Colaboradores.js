import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import ColaboradorCard from '../components/Colaboradores/ColaboradorCard.js';
import './ColaboradorCard.css';
import { BsWhatsapp } from 'react-icons/bs';
// import { Link } from 'react-router-dom';


function Colaboradores() {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    const zap = <a href='https://wa.me/+5591987047441' target='_blanck' rel="noopener"><BsWhatsapp /></a>;

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Colaboradores'>&gt; Colaboradores</h3>
                    <button onClick={handleLogout}>Sair</button><br></br>
            </section>

            <section className='colaboradores'>
                {/* <div className='login'> */}
                    <ColaboradorCard
                        name="Diego Serafim"
                        charge="Webdesigner"
                        age="35"
                        city="Belém"
                        whatsapp={zap}
                        likes="803k"
                        photos="1.4k"
                    />
                    <h6>Usuário autorizado? {String(authenticated)}</h6>
                {/* </div> */}
            </section>
        </div>
    );
}

export default Colaboradores;

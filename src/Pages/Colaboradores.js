import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

function Colaboradores() {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Colaboradores'>&gt; Colaboradores</h3>
            </section>
            
            <section className='colaboradores'>
                <div className='login'>
                    <h1>Página de acesso somente <br /> através do login</h1>
                    <h6>... Em construção!</h6>
                    <button onClick={handleLogout}>Sair</button>
                    <h5>Usuário autorizado? {String(authenticated)}</h5>
                </div>
            </section>
        </div>
    );
}

export default Colaboradores;

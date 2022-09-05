import React, { useState } from 'react';
import './Colaborador.css';

function Colaborador() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("entrou na página", { email, password });
    }

    return (
        <div className='container'>
            <section id='header' className='text-center'>
                <h3 className='title' title='Colaborador'>&gt; Colaborador</h3>
            </section>
            
            <section className='colaborador'>
                <div className='login'>
                    <h1>Colaborador - Login</h1>
                    <h6>... Em construção!</h6>
                    <form className='form' onSubmit={handleSubmit} action=''>
                        <div className='field'>
                            <label htmlFor='email'>E-mail</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor='password'>Senha</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>
                        <div className='button'>
                            <button type='submit'>Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Colaborador;

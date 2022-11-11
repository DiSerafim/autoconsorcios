import React, { useState, useContext } from "react";
import "./ColaboradorLogin.css";
import { AuthContext } from "../context/auth";

function Colaborador() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entrou na página", { email, password });
    login(email, password);
  };

  return (
    <div className="container">
      <section id="header" className="text-center">
        <h3 className="title" title="Colaborador">
          &gt; Colaborador
        </h3>
      </section>

      <section className="colaborador">
        <div className="login">
          <h1>Faça Login para cotinuar</h1>
          <h6>
            --' Para ter acesso use seu e-mail e a senha <h4>'serafim'</h4>
          </h6>
          <h6>Usuário autorizado? {String(authenticated)}</h6>
          <form className="form" onSubmit={handleSubmit} action="">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                title="Digite seu e-mail!"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                title="Digite sua senha!"
                minLength={6}
              />
            </div>
            <div className="button">
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Colaborador;

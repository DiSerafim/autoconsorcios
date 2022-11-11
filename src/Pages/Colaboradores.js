import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import ColaboradorCard from "../components/Colaboradores/ColaboradorCard.js";
import "./ColaboradorCard.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Colaboradores() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const zap = (
    <a href="https://wa.me/+5591985362086" target="_blanck" rel="noopener">
      <BsWhatsapp />
    </a>
  );

  return (
    <div className="container">
      <section id="header" className="text-center">
        <h3 className="title" title="Colaboradores">
          &gt; Colaboradores
        </h3>
        <button onClick={handleLogout}>Sair</button>
        <br></br>
      </section>

      <section className="colaboradores">
        <ColaboradorCard
          name="Diego Serafim"
          charge="Webdesigner"
          age="35"
          city="Belém"
          whatsapp={zap}
          likes="803k"
          photos="1.4k"
          className="card"
        />
        <Link to="/AlbumCopa" className="album">
          <h6>Album da copa</h6>
          <FaEye />
        </Link>
      </section>
    </div>
  );
}

export default Colaboradores;

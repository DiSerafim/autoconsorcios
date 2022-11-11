import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Colaborador from "./Pages/ColaboradorLogin";
import Observacao from "./Pages/Observacao";
import Empresa from "./Pages/Empresa";
import { AuthProvider, AuthContext } from "./context/auth";
import Colaboradores from "./Pages/Colaboradores";
import AlbumCopa from "./Pages/AlbumCopa";
import AlbumCopaCopy from "./Pages/AlbumCopaCopy";

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="colaboradores">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/empresa" element={<Empresa />} />
          <Route exact path="/observacao" element={<Observacao />} />
          <Route exact path="/AlbumCopa" element={<AlbumCopa />} />
          <Route exact path="/AlbumCopaCopy" element={<AlbumCopaCopy />} />
        </Routes>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Colaborador />} />
            <Route
              exact
              path="/colaboradores"
              element={
                <Private>
                  <Colaboradores />
                </Private>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

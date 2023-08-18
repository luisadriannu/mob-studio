import { NavLink } from "react-router-dom";
import "./Styles.css";

export default function Header() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="header">
      <div className="menu">
        <div>
          <NavLink
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/"
          >
            Inicio
          </NavLink>
        </div>
        <div>
          <NavLink
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/perfil"
          >
            Perfil
          </NavLink>
        </div>
        <div>
          <NavLink
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="/contacto"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import "./Styles.css";

export default function AbsoluteContact() {
  return (
    <NavLink to="/contacto" className="absolute-contact">
      Contacto
    </NavLink>
  );
}

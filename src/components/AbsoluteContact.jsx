import { NavLink } from "react-router-dom";
import "./Styles.css";
import { motion } from "framer-motion";

export default function AbsoluteContact() {
  return (
    <NavLink to="/contacto" className="absolute-contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <div>
          <i className="bi bi-asterisk"></i>
        </div>
        <div>Contacto</div>
      </motion.div>
    </NavLink>
  );
}

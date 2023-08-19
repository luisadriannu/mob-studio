import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./components/Styles.css";
import { AnimatePresence } from "framer-motion";
import MagicGifts from "./pages/MagicGifts";
import NewYork from "./pages/NewYork";
import Error404 from "./pages/Error404";

function App() {
  return (
    <AnimatePresence>
      <HashRouter>
        <div className="header-hidden" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proyectos/magicgifts" element={<MagicGifts />} />
          <Route path="/proyectos/newyork" element={<NewYork />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;

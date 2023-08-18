import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./components/Styles.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <HashRouter>
        <Header />
        <div className="header-hidden" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        {/* <Home /> */}
        <Footer />
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;

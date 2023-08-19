import { styled } from "styled-components";
import AbsoluteContact from "../components/AbsoluteContact";
import BackgroundWords from "../components/BackgroundWords";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const checkWindowSize = () => {
    setIsVisible(window.innerWidth >= 1024);
  };

  useEffect(() => {
    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="container section">
        <article>
          <BackgroundWords vhMobile="50vh" vhDesktop="70vh">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              Somos un estudio fotográfico de marca que trabaja con clientes de
              manera única y profesional.
            </motion.h2>

            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <Words>
                  <p>
                    <b>Profesionalismo</b>
                  </p>
                  <p>Marca</p>
                  <p>Producto</p>
                  <p>Fotografía</p>
                </Words>
              </motion.div>
            ) : null}
          </BackgroundWords>
          <Projects />
        </article>
        <AbsoluteContact />
      </section>
    </>
  );
}

const Words = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 2rem;

  p {
    padding: 8px 12px;
    background-color: rgba(232, 229, 228, 0.5);
    border-radius: 100px;
    font-size: 14px;
  }
`;

import { styled } from "styled-components";
import BackgroundWords from "../components/BackgroundWords";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Profile() {
  return (
    <>
      <Header />
      <section className="container section">
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
            Hola👋🏼 somos MOB Studio
          </motion.h2>
        </BackgroundWords>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: "easeInOut",
          }}
          // viewport={{ once: true }}
          viewport={{ once: true }}
        >
          <ContentImagesProfile>
            <div>
              <img src={GetImageUrl("project_1")} alt="" />
            </div>
            <div>
              <img src={GetImageUrl("project_6")} alt="" />
            </div>
          </ContentImagesProfile>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <About>
            <h5>Sobre nosotros</h5>
            <div>
              <h3>
                Somos más que un estudio, somos narradores visuales que
                transformamos tus momentos en historias inolvidables. Con un
                equipo de apasionados fotógrafos y un enfoque creativo, nos
                esforzamos por inmortalizar tus momentos especiales con una
                dosis perfecta de estilo y emoción.
              </h3>
            </div>
          </About>
        </motion.article>

        <BackgroundWords vhMobile="50vh">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Trabajemos juntos.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <a
              href="mailto:luisadriannu13@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Ponerse en contacto.
            </a>
          </motion.div>
        </BackgroundWords>
      </section>
    </>
  );
}

const ContentImagesProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    border-radius: 12px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 60px 20px 20px 20px;

  div {
    max-width: 700px;
  }

  h5 {
    background-color: rgba(232, 229, 228, 0.5);
    padding: 8px 12px;
    margin: 0;
    border-radius: 100px;
    font-weight: normal;
  }

  h3 {
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 140px 40px;
  }
`;

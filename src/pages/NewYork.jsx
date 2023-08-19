import ButtonExit from "../components/ButtonExit";
import projectDescription from "../assets/project-photography_6.jpg";
import {
  Words,
  Description,
  ContentMainInfo,
  ContentTitleandInfo,
  TitleInfo,
  DescriptionInfo,
} from "./MagicGifts";
import { motion } from "framer-motion";
import { GetImageUrl } from "../helpers/GetImageUrl";
import BackgroundWords from "../components/BackgroundWords";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("project-photography_7")}`,
  },
  {
    id: 1,
    image: `${GetImageUrl("project-photography_8")}`,
  },
];

export default function NewYork() {
  return (
    <>
      <ButtonExit />
      <section className="container section">
        <BackgroundWords>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            Explora la diversidad y la belleza de Nueva York en cada imagen
          </motion.h2>
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
              <p>New York</p>
            </Words>
          </motion.div>
        </BackgroundWords>
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="project-info"
        >
          <img src={projectDescription} alt="Proyecto 1" />
          <ContentMainInfo>
            <ContentTitleandInfo>
              <TitleInfo>
                <p>Lugar</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>New York City</p>
              </DescriptionInfo>
            </ContentTitleandInfo>
            <ContentTitleandInfo>
              <TitleInfo>
                <p>Fecha</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>24/07/2023</p>
              </DescriptionInfo>
            </ContentTitleandInfo>
          </ContentMainInfo>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <div className="photos">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.image} />
                </div>
              );
            })}
          </div>
          <Description>
            <div className="description-div ">
              <h4>Descripción</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                accusantium ipsam nostrum quisquam debitis labore, ratione sequi
                non ea, pariatur obcaecati. Laboriosam tempora earum autem, cum
                reprehenderit maxime temporibus modi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dicta, accusantium ipsam nostrum
                quisquam debitis labore, ratione sequi non ea, pariatur
                obcaecati. Laboriosam tempora earum autem, cum reprehenderit
                maxime temporibus modi. reprehenderit maxime temporibus modi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                accusantium ipsam nostrum quisquam debitis labore, ratione sequi
                non ea, pariatur obcaecati. Laboriosam tempora earum autem, cum
                reprehenderit maxime temporibus modi.
              </p>
            </div>
          </Description>
        </motion.article>
        <article>
          <BackgroundWords vhMobile="60vh" vhDesktop="80vh">
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
        </article>
      </section>
    </>
  );
}

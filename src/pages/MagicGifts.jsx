import { styled } from "styled-components";
import BackgroundWords from "../components/BackgroundWords";
import ButtonExit from "../components/ButtonExit";
import { motion } from "framer-motion";
import { GetImageUrl } from "../helpers/GetImageUrl";
import projectDescription from "../assets/project-photography_4.jpg";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("project-photography_2")}`,
  },
  {
    id: 1,
    image: `${GetImageUrl("project-photography_5")}`,
  },
];

export default function MagicGifts() {
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
            Una tienda de regalos que ofrece a los clientes los mejores
            productos
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
              <p>Magic Gifts</p>
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
                <p>Cliente</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>Alison Smith</p>
              </DescriptionInfo>
            </ContentTitleandInfo>
            <ContentTitleandInfo>
              <TitleInfo>
                <p>Negocio</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>Magic Gifts</p>
              </DescriptionInfo>
            </ContentTitleandInfo>
            <ContentTitleandInfo>
              <TitleInfo>
                <p>Puesto</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>Dueño</p>
              </DescriptionInfo>
            </ContentTitleandInfo>
            <ContentTitleandInfo>
              <TitleInfo>
                <p>Fecha</p>
              </TitleInfo>
              <DescriptionInfo>
                <p>16/04/2023</p>
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

const Description = styled.div`
  padding: 20px 0;
  h4 {
    font-size: 14px;
    margin: 0;
  }

  p {
    margin: 10px 0 0 0;
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    padding: 80px 0;
  }
`;

const ContentMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
  }
`;

const ContentTitleandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleInfo = styled.div`
  color: rgb(128, 128, 128);
  font-size: 14px;
`;

const DescriptionInfo = styled.div`
  font-size: 14px;
`;

export {
  Words,
  Description,
  ContentMainInfo,
  ContentTitleandInfo,
  TitleInfo,
  DescriptionInfo,
};

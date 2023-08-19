import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import "./Styles.css";
import BackgroundWords from "./BackgroundWords";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("project-photography_5")}`,
    title: "Magic Gifts",
    locked: false,
    route: "/proyectos/magicgifts",
  },
  {
    id: 2,
    image: `${GetImageUrl("project_2")}`,
    title: "Retratos increibles",
    locked: true,
  },
  {
    id: 3,
    image: `${GetImageUrl("project_3")}`,
    title: "Estilo",
    locked: true,
  },
  {
    id: 4,
    image: `${GetImageUrl("project_4")}`,
    title: "Nissi Beach",
    locked: true,
  },
  {
    id: 5,
    image: `${GetImageUrl("project_5")}`,
    title: "Glacier National Park",
    locked: true,
  },
  {
    id: 6,
    image: `${GetImageUrl("project_6")}`,
    title: "Work Home",
    locked: true,
  },
  {
    id: 7,
    image: `${GetImageUrl("project_7")}`,
    title: "New York",
    locked: false,
    route: "/proyectos/newyork",
  },
  {
    id: 8,
    image: `${GetImageUrl("project_8")}`,
    title: "Los alpes",
    locked: true,
  },
  {
    id: 9,
    image: `${GetImageUrl("project_9")}`,
    title: "Maekup",
    locked: true,
  },
  {
    id: 10,
    image: `${GetImageUrl("project_10")}`,
    title: "Parque",
    locked: true,
  },
];

export default function Projects() {
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <ContentMainProjects>
          {data.map((item, index) => {
            return (
              <ContentProject
                key={index}
                className={item.locked ? "locked" : null}
              >
                <NavLink
                  to={item.route}
                  onClick={item.locked ? null : scrollTop}
                >
                  <Project src={item.image} />
                  {isVisible ? (
                    <i
                      className={
                        item.locked
                          ? "bi bi-lock-fill"
                          : "bi bi-box-arrow-up-right"
                      }
                    ></i>
                  ) : null}
                  {!isVisible && item.locked ? (
                    <i className="bi bi-lock-fill"></i>
                  ) : null}
                </NavLink>
                <ContentTexts>
                  <p>{item.title}</p>
                  <p className="coming-soon">
                    {item.locked ? "* Próximamente" : null}
                  </p>
                </ContentTexts>
              </ContentProject>
            );
          })}
        </ContentMainProjects>
      </motion.section>
      <BackgroundWords vhMobile="40vh" vhDesktop="50vh">
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
    </>
  );
}

const Project = styled.img`
  border-radius: 12px;
`;

const ContentMainProjects = styled.article`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  position: relative;

  i {
    position: absolute;
    opacity: 1;
    font-size: 24px;
    top: 1.2rem;
    right: 1.2rem;
    color: #fff;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    overflow: hidden;

    img {
      transition: opacity 0.3s ease-in, filter 0.3s ease-in;
    }

    &:hover {
      p {
        opacity: 1;
      }
    }

    a:hover {
      img {
        opacity: 0.95;
        filter: blur(12px);
      }

      i {
        opacity: 1;
      }
    }

    a {
      pointer-events: all;
    }

    i {
      opacity: 0;
      font-size: 24px;
      color: #fff;
      transition: opacity 0.3s ease-in;
    }

    p {
      font-size: 17px;
      opacity: 0;
      color: #fff;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.44);
      transition: opacity 0.3s ease-in;
    }
  }
`;

const ContentTexts = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    pointer-events: none;
  }
`;

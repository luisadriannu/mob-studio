import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import "./Styles.css";
import BackgroundWords from "./BackgroundWords";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("project_1")}`,
    title: "Fotografía Profesional",
  },
  {
    id: 2,
    image: `${GetImageUrl("project_2")}`,
    title: "Retratos increibles",
  },
  {
    id: 3,
    image: `${GetImageUrl("project_3")}`,
    title: "Estudio profesional",
  },
  {
    id: 4,
    image: `${GetImageUrl("project_4")}`,
    title: "Fotografía única",
  },
  {
    id: 5,
    image: `${GetImageUrl("project_5")}`,
    title: "Paisajes",
  },
  {
    id: 6,
    image: `${GetImageUrl("project_6")}`,
    title: "Fotografías de todo tipo",
  },
  {
    id: 7,
    image: `${GetImageUrl("project_7")}`,
    title: "Nieve",
  },
  {
    id: 8,
    image: `${GetImageUrl("project_8")}`,
    title: "Los alpes",
  },
  {
    id: 9,
    image: `${GetImageUrl("project_9")}`,
    title: "Maekup",
  },
  {
    id: 10,
    image: `${GetImageUrl("project_10")}`,
    title: "Captura momentos únicos",
  },
];

export default function Projects() {
  return (
    <>
      <ContentMainProjects>
        {data.map((item, index) => {
          return (
            <ContentProject key={index}>
              <Project src={item.image} />
              <p>{item.title}</p>
            </ContentProject>
          );
        })}
      </ContentMainProjects>
      <BackgroundWords>
        <h2>Trabajemos juntos.</h2>
        <a href="#">Ponerse en contacto.</a>
      </BackgroundWords>
    </>
  );
}

const Project = styled.img`
  border-radius: 12px;
`;

const ContentMainProjects = styled.section`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentProject = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;

  p {
    margin: 0;
    font-weight: bold;
  }

  img {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    overflow: hidden;
    position: relative;

    img {
      cursor: pointer;
      transition: opacity 0.3s ease-in, filter 0.3s ease-in;
    }

    img:hover {
      opacity: 0.9;
      filter: blur(12px);
    }

    p {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: #fff;
      text-shadow: 4px 4px 9px rgba(0, 0, 0, 0.11);
    }
  }
`;

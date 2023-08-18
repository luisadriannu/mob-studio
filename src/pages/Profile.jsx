import { styled } from "styled-components";
import BackgroundWords from "../components/BackgroundWords";
import { GetImageUrl } from "../helpers/GetImageUrl";

export default function Profile() {
  return (
    <section className="container section">
      <BackgroundWords>
        <h2>Hola👋🏼 somos MOB Studio</h2>
      </BackgroundWords>

      <ContentImagesProfile>
        <div>
          <img src={GetImageUrl("project_1")} alt="" />
        </div>
        <div>
          <img src={GetImageUrl("project_6")} alt="" />
        </div>
      </ContentImagesProfile>

      <About>
        <h5>Sobre nosotros</h5>

        <div>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            voluptatem minima excepturi quaerat porro, magni officia ullam
            dignissimos, repellat error quidem esse maxime exercitationem
            voluptatibus maiores odio.
          </h3>
        </div>
      </About>

      <BackgroundWords>
        <h2>Trabajemmos juntos.</h2>
        <a href="#">Ponerse en contacto.</a>
      </BackgroundWords>
    </section>
  );
}

const ContentImagesProfile = styled.article`
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

const About = styled.article`
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

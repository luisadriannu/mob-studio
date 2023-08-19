import { styled } from "styled-components";
import ButtonExit from "../components/ButtonExit";

export default function Error404() {
  return (
    <>
      <ButtonExit />
      <ContentError className="section container">
        <div>
          <i className="bi bi-search"></i> <br />
        </div>
        <div>
          <h2>Error, no se ha podido encontrar esta sección :(</h2>
        </div>
      </ContentError>
    </>
  );
}

const ContentError = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60vh;
  gap: 20px;

  i {
    font-size: clamp(1.7rem, calc(1.25rem + 2.25vw), 3.95rem);
  }

  h2 {
    margin: 0;
  }
`;

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function ButtonExit() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <NavLink className="exit-button" to="/" onClick={scrollTop}>
      <ExitButton>
        <i className="bi bi-x-lg"></i>
      </ExitButton>
    </NavLink>
  );
}

const ExitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

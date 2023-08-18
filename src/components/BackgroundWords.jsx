import { styled } from "styled-components";
import "./Styles.css";

export default function BackgroundWords({ children, vhMobile, vhDesktop }) {
  return (
    <BackgroundWordss
      $vhDesktop={vhDesktop}
      $vhMobile={vhMobile}
      className="words"
    >
      <div>{children}</div>
    </BackgroundWordss>
  );
}

const BackgroundWordss = styled.article`
  height: ${(props) => props.$vhMobile};

  div {
    max-width: 700px;
  }

  @media screen and (min-width: 1024px) {
    height: ${(props) => props.$vhDesktop};
  }
`;

import { styled } from "styled-components";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <FooterMOB>
      <ContentInfo>
        <ContentLogo>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <i className="bi bi-asterisk"></i>
          </motion.div>
          <div>
            <p>© MOB STUDIO 2023</p>
          </div>
        </ContentLogo>
        <SocialMedia>
          <a
            href="https://twitter.com/LuisAdrianNuez"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/luisadrian.nunezjara"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="mailto:luisadriannu13@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Mail
          </a>
        </SocialMedia>
      </ContentInfo>
    </FooterMOB>
  );
}

const FooterMOB = styled.footer`
  padding: 40px 40px 90px 40px;
  text-align: center;
  font-size: 14px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

const ContentInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  i {
    font-size: 25px;
  }

  p {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

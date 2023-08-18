import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterMOB>
      <ContentInfo>
        <div>
          <p>© MOB STUDIO 2023</p>
        </div>
        <SocialMedia>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Mail</p>
        </SocialMedia>
      </ContentInfo>
    </FooterMOB>
  );
}

const FooterMOB = styled.footer`
  padding: 40px 40px 90px 40px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

const ContentInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

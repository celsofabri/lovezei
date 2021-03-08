import styled from 'styled-components';
import BgAbout from 'assets/images/julio01.jpg';

export const StyledAbout = styled.div`
  display: block;
  padding: 100px 0;
  text-align: center;
`;

export const StyledAboutImage = styled.div`
  img {
    display: block;
    margin: 30px auto;
    padding: 0;
    max-width: 100%;
    height: auto;
  }
`;

export const StyledAboutContent = styled.div`
  max-width: 960px;
  margin: 0 auto;

  h3,
  ul {
    text-align: left;
  }
`;

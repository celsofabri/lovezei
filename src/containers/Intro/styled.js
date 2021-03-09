import styled from 'styled-components';
import { fonts } from 'assets/global/tokens';
import BgIntro from 'assets/images/julio05.jpg';

export const StyledIntro = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  background-image: url(${BgIntro});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledHeader = styled.header`
  display: block;
`;

export const StyledLogo = styled.h1`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 42px;
`;

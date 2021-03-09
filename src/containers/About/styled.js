import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';
import BgAbout from 'assets/images/julio01.jpg';

export const StyledAbout = styled.section`
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

export const StyledLink = styled.a`
  display: inline-block;
  margin: 20px;
  padding: 10px 20px;
  font-family: ${fonts.primary};
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${colors.black};
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.red};
  }
`;

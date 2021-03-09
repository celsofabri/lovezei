import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledFooter = styled.footer`
  display: block;
  padding: 10px 0;
  text-align: center;
  background-color: ${colors.black};
`;

export const StyledLogo = styled.h3`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 26px;
  color: ${colors.white};
`;

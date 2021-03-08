import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledApp = styled.div`
  display: block;
`;

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
`;

export const StyledWrapper = styled.div`
  max-width: 1920px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledTitle = styled.h2`
  position: relative;
  display: inline-flex;
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${colors.black};
    content: '';
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  margin: 20px;
  padding: 10px 20px;
  font-family: ${fonts.primary};
  font-size: 16px;
  color: ${colors.white};
  text-transform: uppercase;
  background-color: ${colors.black};
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.red};
  }
`;

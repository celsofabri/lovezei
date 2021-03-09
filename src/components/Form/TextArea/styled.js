import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledField = styled.div`
  display: block;
  width: 100%;
`;

export const StyledTextArea = styled.input`
  width: 100%;
  min-height: 100px;
  font-family: ${fonts.primary};
  padding: 10px;
  resize: none;
`;

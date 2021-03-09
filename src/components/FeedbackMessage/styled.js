import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledFeedback = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: ${colors.white};
`;

export const StyledFeedbackContent = styled.div`
  display: block;
`;

export const StyledFeedbackMessage = styled.h4`
  color: ${colors.black};
`;

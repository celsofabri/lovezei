import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledLozovei = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray};

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

export const StyledLozoveiImage = styled.div`
  width: 48.5%;
  height: 100%;

  img {
    display: block;
    max-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    object-fit: cover;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 500px;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const StyledLozoveiContent = styled.div`
  width: 48.5%;
  height: 100%;
  padding: 16px;
  overflow: auto;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

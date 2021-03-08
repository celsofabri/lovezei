import styled from 'styled-components';

export const StyledLozovei = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

export const StyledLozoveiImage = styled.div`
  max-width: 48.5%;
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
`;

export const StyledLozoveiContent = styled.div`
  max-width: 48.5%;
  height: 100%;
  padding: 16px;
  overflow: auto;
`;

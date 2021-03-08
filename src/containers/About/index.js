import React from 'react';
import {
  StyledWrapper,
  StyledTitle,
  StyledButton
} from 'assets/global/styled';
import {
  StyledAbout,
  StyledAboutImage,
  StyledAboutContent
} from './styled';
import ImgAbout from 'assets/images/julio06.jpg';

const About = () => {
  return (
    <StyledAbout>
      <StyledWrapper>
        <StyledAboutContent>
          <StyledTitle>Sobre o projeto</StyledTitle>

          <p>
            Este projeto foi criado com o intuito exclusivo de
            desencalhar o magnífico{' '}
            <strong>Julio Pavani Lozovei</strong> amorosamente,
            servindo como apresentação do mesmo e sua candidatura para
            conhecer melhor este homem incrível.
          </p>
        </StyledAboutContent>
        <StyledAboutImage>
          <img src={ImgAbout} alt="Julio Pavani Lozovei - Sobre" />
        </StyledAboutImage>

        <StyledButton type="button">Conheça o Julio</StyledButton>
      </StyledWrapper>
    </StyledAbout>
  );
};

export default About;

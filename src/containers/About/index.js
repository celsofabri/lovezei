import React from 'react';
import { StyledWrapper, StyledTitle } from 'assets/global/styled';
import {
  StyledAbout,
  StyledAboutImage,
  StyledAboutContent,
  StyledLink
} from './styled';
import ImgAbout from 'assets/images/julio06.jpg';

const About = () => {
  return (
    <StyledAbout>
      <StyledWrapper>
        <StyledAboutContent>
          <StyledTitle>Processo seletivo - Mozão 2021</StyledTitle>

          <p>
            Procuramos candidatas para ocupar a vaga de "Mozão" do{' '}
            <strong>Julio Pavani Lozovei</strong>.
          </p>

          <h3>Requisitos:</h3>

          <ul>
            <li>- Ser maior de 18 anos;</li>
            <li>
              - Preferencialmente a candidata deve residir na cidade
              de Curitiba/PR ou região metropolitana;
            </li>
            <li>
              - Estar interessada em um relacionamento sério. Nada de
              poliamor;
            </li>
            <li>- Goste de cachorros;</li>
            <li>- Respeitar diferentes crenças e/ou culturas.</li>
          </ul>
        </StyledAboutContent>
        <StyledAboutImage>
          <img src={ImgAbout} alt="Julio Pavani Lozovei - Sobre" />
        </StyledAboutImage>

        <StyledAboutContent>
          <p>
            Você possui os requisitos e se identificou com a vaga?
            Conheça mais sobre o <strong>Julio</strong> e se inscreva
            no processo :)
          </p>
          <StyledLink
            href="#julio"
            title="Conheça mais sobre o Julio"
          >
            Conheça mais sobre o Julio
          </StyledLink>
        </StyledAboutContent>
      </StyledWrapper>
    </StyledAbout>
  );
};

export default About;

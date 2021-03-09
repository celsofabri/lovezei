import React from 'react';
import { StyledTitle } from 'assets/global/styled';
import {
  StyledLozovei,
  StyledLozoveiImage,
  StyledLozoveiContent
} from './styled';
import ImgLozovei from 'assets/images/julio03.jpg';

const Lozovei = () => {
  return (
    <StyledLozovei>
      <StyledLozoveiImage>
        <img src={ImgLozovei} alt="Conheça o Julio Pavani Lozovei" />
      </StyledLozoveiImage>
      <StyledLozoveiContent>
        <StyledTitle>Julio Pavani Lozovei</StyledTitle>

        <p>
          Nascido em Curitiba/PR em 24 de Março de 1997, é tecnólogo
          em Gestão de Tecnologia da Informação pela Faculdade Santa
          Cruz e pós-graduado em Sistemas Embarcados e IoT pela
          Universidade Positivo.
        </p>
        <p>
          Atualmente é Engenheiro de Software, trabalhando como
          Desenvolvedor Front-End em uma Startup chamada Delivery Much
          de Florianópolis - SC.
        </p>

        <h3>O que você ganha sendo meu mozão:</h3>

        <ul>
          <li>
            - Toco alguns instrumentos musicais. Podemos fazer duetos;
          </li>
          <li>
            - Não tenho tempo ruim para uma boa gastronomia, seja ela
            o boteco da faculdade ou o restaurante granfino que você
            sempre quis ir, pois provavelmente também irei querer ir,
            quem ama alimenta;
          </li>
          <li>
            - Leio e assisto sobre diversas coisas. Pode adquirir
            cultura sobre as mais variadas coisas comigo (cultura útil
            e principalmente inútil);
          </li>
          <li>
            - Podemos assistir Netflix, Amazon Prime, Disney+ e ainda
            ver jogos do Furacão (Athletico Paranaense);
          </li>
          <li>
            - Sou pai da Nenê (minha Buldog Francesa), logo, você será
            a mãe e seremos uma família feliz :)
          </li>
          <li>
            - Posso conversar com você imitando o Silvio Santos,
            duvido que não vá rir ou que não vá me pedir pra imitar
            para os seus pais.
          </li>
        </ul>
      </StyledLozoveiContent>
    </StyledLozovei>
  );
};

export default Lozovei;

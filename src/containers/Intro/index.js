import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import { StyledIntro, StyledHeader, StyledLogo } from './styled';

const Intro = () => {
  return (
    <StyledIntro>
      <StyledWrapper>
        <StyledHeader>
          <StyledLogo>Julio Pavani Lozovei</StyledLogo>
        </StyledHeader>
      </StyledWrapper>
    </StyledIntro>
  );
};

export default Intro;

import React from 'react';
import Intro from 'containers/Intro';
import About from 'containers/About';
import { StyledApp } from 'assets/global/styled';

const App = ({ env }) => {
  return (
    <StyledApp>
      <Intro />
      <About />
    </StyledApp>
  );
};

export default App;

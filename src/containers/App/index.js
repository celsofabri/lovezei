import React from 'react';
import About from 'containers/About';
import Form from 'containers/Form';
import { StyledApp } from 'assets/global/styled';

const App = ({ env }) => {
  return (
    <StyledApp>
      <About />
      <Form env={env} />
    </StyledApp>
  );
};

export default App;

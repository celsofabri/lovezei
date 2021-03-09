import React from 'react';
import Intro from 'containers/Intro';
import About from 'containers/About';
import Lozovei from 'containers/Lozovei';
import Form from 'containers/Form';
import Footer from 'components/Footer';
import { StyledApp } from 'assets/global/styled';

const App = ({ env }) => {
  return (
    <StyledApp>
      <Intro />
      <About />
      <Lozovei />
      <Form />
      <Footer />
    </StyledApp>
  );
};

export default App;

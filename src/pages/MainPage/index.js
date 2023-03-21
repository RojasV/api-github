import React from 'react';

import { Container } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container>
    <img src={githubLogo} alt="logo"/>
  </Container>
);

export default MainPage;

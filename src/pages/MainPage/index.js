import React from 'react';
import {MdSearch} from "react-icons/md"

import { Button, Container, Form, Input, Logo, Title } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container >
    <Logo src={githubLogo} alt='Logo'/>
    <Title>API Github</Title>
    <Form>
      <Input placeholder="usuário"/>
      <Button>
        <MdSearch size={42}/>
      </Button>

    </Form>
  </Container>
);

export default MainPage;

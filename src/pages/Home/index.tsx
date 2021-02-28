import React from 'react';

import { View } from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Cards from '../../components/Cards';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Cards />
      </Content>
      <Tabs />
    </Container>
  );
};

export default Home;

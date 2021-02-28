import React from 'react';

import RoundButton from '../RoundButton';

import { Container, Name, Text, ContainerButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Name>
        <Text>Olá, Sr. Baracho</Text>
      </Name>

      <ContainerButton>
        <RoundButton title="hide" icon="eye-off" onPress={() => {}} />
      </ContainerButton>

      <ContainerButton>
        <RoundButton title="config" icon="settings" onPress={() => {}} />
      </ContainerButton>
    </Container>
  );
};

export default Header;

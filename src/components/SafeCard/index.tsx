import React from 'react';

import VectorIcons from 'react-native-vector-icons/FontAwesome';
import { Container, Card, HeaderCard, HeaderTitle, Title } from './styles';

import Button from '../Button';

const SafeCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <HeaderCard>
          <VectorIcons name="umbrella" size={40} color="#8b10ae" />
          <HeaderTitle>Seguro de vida</HeaderTitle>
        </HeaderCard>

        <Title>
          Conheça Nubank Vida: um seguro simples e que cabe no bolso
        </Title>

        <Button />
      </Card>
    </Container>
  );
};

export default SafeCard;

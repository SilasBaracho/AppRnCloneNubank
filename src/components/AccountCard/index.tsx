import React from 'react';

import VectorIcons from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Card,
  HeaderCard,
  HeaderTitle,
  TextSaldoDisponivel,
  TextSaldo,
} from './styles';

const AccountCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <HeaderCard>
          <VectorIcons name="coins" size={20} color="#828282" />

          <HeaderTitle>Conta</HeaderTitle>
        </HeaderCard>

        <TextSaldoDisponivel>Saldo disponível</TextSaldoDisponivel>

        <TextSaldo>R$ 4.000.000,00</TextSaldo>
      </Card>
    </Container>
  );
};

export default AccountCard;

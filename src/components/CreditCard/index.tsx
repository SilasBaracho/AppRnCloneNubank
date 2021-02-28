import React from 'react';

import VectorIcons from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Card,
  HeaderCard,
  HeaderTitle,
  TextFaturaAtual,
  LimiteCard,
  SaldoDevedor,
  LimiteDisponivelCard,
  LimiteDisponivel,
  LimiteDisponivelSaldo,
} from './styles';

const CreditCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <HeaderCard>
          <VectorIcons name="credit-card" size={20} color="#828282" />

          <HeaderTitle>Cartão de Crédito</HeaderTitle>
        </HeaderCard>

        <TextFaturaAtual>Fatura atual</TextFaturaAtual>

        <LimiteCard>
          <SaldoDevedor>R$ 1,00</SaldoDevedor>
          <LimiteDisponivelCard>
            <LimiteDisponivel>Limite disponível</LimiteDisponivel>
            <LimiteDisponivelSaldo>R$99.999,00</LimiteDisponivelSaldo>
          </LimiteDisponivelCard>
        </LimiteCard>
      </Card>
    </Container>
  );
};

export default CreditCard;

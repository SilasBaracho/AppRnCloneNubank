import React from 'react';

import { Container, CardsContianer } from './styles';
import CreditCard from '../CreditCard';
import AccountCard from '../AccountCard';
import SafeCard from '../SafeCard';

const Cards: React.FC = () => {
  return (
    <Container>
      <CardsContianer>
        <CreditCard />

        <AccountCard />

        <SafeCard />
      </CardsContianer>
    </Container>
  );
};

export default Cards;

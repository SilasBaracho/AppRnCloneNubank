import React from 'react';

import { Container, Touchable, ButtonText } from './styles';

const Button: React.FC = () => {
  return (
    <Container>
      <Touchable>
        <ButtonText>CONHECER</ButtonText>
      </Touchable>
    </Container>
  );
};

export default Button;

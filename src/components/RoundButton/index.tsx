import React from 'react';
import { ButtonProps, TouchableOpacity } from 'react-native';

import { Container, Icon } from './styles';

interface Props extends ButtonProps {
  icon: string;
}

const RoundButton: React.FC<Props> = ({ icon, ...rest }) => {
  return (
    <TouchableOpacity>
      <Container {...rest}>
        <Icon name={icon} size={20} color="#FFF" />
      </Container>
    </TouchableOpacity>
  );
};

export default RoundButton;

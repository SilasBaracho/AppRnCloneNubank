import styled from 'styled-components/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)``;

export const Touchable = styled(TouchableOpacity)`
  width: 45%;
  height: 50px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #8b10ae;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #8b10ae;
  font-weight: bold;
`;

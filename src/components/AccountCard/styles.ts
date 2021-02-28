import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 20px;
`;

export const Card = styled.View`
  flex-direction: column;
  padding: 30px 30px;
  width: 100%;
  height: 170px;
  border-radius: 5px;
  background-color: #fff;
  justify-content: space-between;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: #828282;
  padding-left: 20px;
`;

export const TextSaldoDisponivel = styled.Text`
  font-size: 16px;
  color: #828282;
`;

export const TextSaldo = styled.Text`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 20px;
`;

export const Card = styled.View`
  flex-direction: column;
  padding: 30px 30px;
  width: 100%;
  height: 200px;
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

export const TextFaturaAtual = styled.Text`
  font-size: 16px;
  color: #828282;
`;

export const LimiteCard = styled.View`
  flex-direction: column;
`;

export const SaldoDevedor = styled.Text`
  font-size: 28px;
  color: #2795c7;
  font-weight: bold;
`;

export const LimiteDisponivelCard = styled.View`
  flex-direction: row;
`;

export const LimiteDisponivel = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const LimiteDisponivelSaldo = styled.Text`
  font-size: 16px;
  color: #007a3d;
  font-weight: bold;
  padding-left: 5px;
`;

import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.View`
  flex-direction: column;
  padding: 30px 30px;
  width: 100%;
  height: 230px;
  border-radius: 5px;
  background-color: #fff;
  justify-content: space-between;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  color: #8b10ae;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #828282;
`;

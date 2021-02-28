import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px 0px;
`;

export const CardsContianer = styled.ScrollView.attrs({
  vertical: true,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

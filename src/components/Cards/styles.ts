import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CardsContianer = styled.ScrollView.attrs({
  vertical: true,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

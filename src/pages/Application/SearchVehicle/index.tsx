import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  HeaderTitleContainer,
  Title,
  TotalVehicles,
  Search,
  SearchInputBox,
  SearchInput,
  SearchIconBox,
} from './styles';

const SearchVehicle: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <Title>Listagem</Title>

          <TotalVehicles>12 carros</TotalVehicles>
        </HeaderTitleContainer>

        <Search>
          <SearchInputBox>
            <SearchInput placeholder="Qual carro você procura?" />
          </SearchInputBox>

          <SearchIconBox>
            <Icon name="search" size={24} color="#47474d" />
          </SearchIconBox>
        </Search>
      </Header>
    </Container>
  );
};

export default SearchVehicle;

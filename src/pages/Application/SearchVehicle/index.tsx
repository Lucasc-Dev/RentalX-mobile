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
  VehiclesContainer,
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  VehicleImage,
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

      <VehiclesContainer>
        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>
            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 120</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
        </Vehicle>

        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>
            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 120</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
        </Vehicle>

        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>
            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 120</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
        </Vehicle>

        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>
            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 120</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
        </Vehicle>

        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>
            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 120</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
        </Vehicle>
      </VehiclesContainer>
    </Container>
  );
};

export default SearchVehicle;

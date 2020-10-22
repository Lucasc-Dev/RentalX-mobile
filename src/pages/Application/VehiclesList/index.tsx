import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather'

import lightDotIcon from '../../../assets/icons/LightDot.png';
import darkDotIcon from '../../../assets/icons/DarkDot.png';

import { 
  Container,
  Header,
  DateContainer,
  DateField,
  ChevronIcon,
  DateFieldTitle,
  DateFieldInfo,
  VehiclesContainer,
  TitleContainer,
  Title,
  OptionsContainer,
  TotalVehicles,
  FiltersButton,
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleTitle,
  VehicleSubtitle,
  VehiclePrice,
  VehicleImage,
  VehicleImagesInfo,
  VehicleImagesIcon,
} from './styles';

const VehiclesList: React.FC = () => {
  const [startDate, setStartDate] = useState('16 Julho 2020');
  const [endDate, setEndDate] = useState('20 Julho 2020');

  return (
    <Container>
      <Header>
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInfo>{startDate}</DateFieldInfo>
          </DateField>

          <ChevronIcon name="chevron-down" size={20} color="#7a7a80" />

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInfo>{endDate}</DateFieldInfo>
          </DateField>
        </DateContainer>
      </Header>

      <VehiclesContainer>
        <TitleContainer>
          <Title>Resultados</Title>

          <OptionsContainer>
            <TotalVehicles>3 carros</TotalVehicles>
            
            <FiltersButton>
              <Icon name="filter" size={20} color="#47474d" />
            </FiltersButton>
          </OptionsContainer>
        </TitleContainer>

        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>

            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 580</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />

          <VehicleInfoContainer>
            <Icon name="droplet" size={20} color="#aeaeb3"/>

            <VehicleImagesInfo>
              <VehicleImagesIcon source={darkDotIcon} />
              <VehicleImagesIcon source={lightDotIcon} />
            </VehicleImagesInfo>
          </VehicleInfoContainer>
        </Vehicle>
        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>

            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 580</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />

          <VehicleInfoContainer>
            <Icon name="droplet" size={20} color="#aeaeb3"/>

            <VehicleImagesInfo>
              <VehicleImagesIcon source={darkDotIcon} />
              <VehicleImagesIcon source={lightDotIcon} />
            </VehicleImagesInfo>
          </VehicleInfoContainer>
        </Vehicle>
        <Vehicle>
          <VehicleInfoContainer>
            <TextContainer>
              <VehicleSubtitle>Lamborghini</VehicleSubtitle>
              <VehicleTitle>Huracan</VehicleTitle>
            </TextContainer>

            <TextContainer>
              <VehicleSubtitle>Ao dia</VehicleSubtitle>
              <VehiclePrice>R$ 580</VehiclePrice>
            </TextContainer>
          </VehicleInfoContainer>

          <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />

          <VehicleInfoContainer>
            <Icon name="droplet" size={20} color="#aeaeb3"/>

            <VehicleImagesInfo>
              <VehicleImagesIcon source={darkDotIcon} />
              <VehicleImagesIcon source={lightDotIcon} />
            </VehicleImagesInfo>
          </VehicleInfoContainer>
        </Vehicle>
      </VehiclesContainer>
    </Container>
  );
};

export default VehiclesList;

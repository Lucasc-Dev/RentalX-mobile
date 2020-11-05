import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../../services/api';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';

import rightArrow from '../../../assets/icons/RightArrow.png';

import { 
  Container,
  Header,
  BackButton,
  ImageDotsContainer,
  ImageDot,
  VehicleContainer,
  VehicleImage,
  InfoContainer,
  TextContainer,
  Subtitle,
  VehicleName,
  VehiclePrice,
  FeaturesContainer,
  Feature,
  FeatureIcon,
  FeatureDescription,
  PeriodContainer,
  DateContainer,
  PeriodDateText,
  Bottom,
  PriceContainer,
  PriceCalculationContainer,
  PriceCalculationText,
  TotalPrice,
} from './styles';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  plate: string;
  daily_price: number;
  image: string;
  fuel: string;
  gear: string;
}

interface VehicleDetailsParams {
  id: string;
}

const VehicleDetails: React.FC = () => {
  const { params } = useRoute();

  const { id } = params as VehicleDetailsParams;

  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);

  useEffect(() => {
    api.get(`vehicles/${id}`).then(response => {
      setVehicle(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton>
          <Icon name="chevron-left" size={20} color="#aeaeb3" />
        </BackButton>

        <ImageDotsContainer>
          <ImageDot isSelected />
          <ImageDot isSelected={false} />
          <ImageDot isSelected={false} />
        </ImageDotsContainer>
      </Header>

      <VehicleContainer>
        <VehicleImage source={{ uri: vehicle.image }}/>

        <InfoContainer>
          <TextContainer>
            <Subtitle>{vehicle.brand}</Subtitle>
            <VehicleName>{vehicle.name}</VehicleName>
          </TextContainer>
          <TextContainer>
            <Subtitle>Ao dia</Subtitle>
            <VehiclePrice>R$ {vehicle.daily_price}</VehiclePrice>
          </TextContainer>
        </InfoContainer>

        <FeaturesContainer>
          <Feature>
            <FeatureIcon source={{ uri: '' }} />
            <FeatureDescription>Automatico</FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon source={{ uri: '' }} />
            <FeatureDescription>Gasolina</FeatureDescription>
          </Feature>
          <Feature>
            <FeatureIcon source={{ uri: '' }} />
            <FeatureDescription>380km/h</FeatureDescription>
          </Feature>
        </FeaturesContainer>
      </VehicleContainer>

      <PeriodContainer>
        <DateContainer>
          <Subtitle>De</Subtitle>

          <PeriodDateText>17 Julho 2020</PeriodDateText>
        </DateContainer>

        <Image source={rightArrow} />

        <DateContainer>
          <Subtitle>Até</Subtitle>

          <PeriodDateText>20 Julho 2020</PeriodDateText>
        </DateContainer>
      </PeriodContainer>

      <Bottom>
        <PriceContainer>
          <PriceCalculationContainer>
            <Subtitle>Total</Subtitle>
            <PriceCalculationText>R$ {vehicle.daily_price} * 3 diárias</PriceCalculationText>
          </PriceCalculationContainer>

          <TotalPrice>R$ { vehicle.daily_price }</TotalPrice>
        </PriceContainer>

        <Button 
          text="Alugar agora"
        />
      </Bottom>
    </Container>
  );
};

export default VehicleDetails;

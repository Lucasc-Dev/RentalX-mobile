import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { usePeriod } from '../../../hooks/PeriodContext';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../../services/api';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';

import rightArrow from '../../../assets/icons/RightArrow.png';

import { 
  Container,
  ListContainer,
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
  FooterContainer,
  PriceContainer,
  PriceCalculationContainer,
  PriceCalculationText,
  TotalPrice,
} from './styles';

interface Feature {
  id: string;
  name: string;
  description: string;
  image: string;
}

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
  const { timeInDays } = usePeriod();
  const { navigate } = useNavigation();

  const { id } = params as VehicleDetailsParams;

  const [features, setFeatures] = useState<Feature[]>([]);
  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);

  useEffect(() => {
    api.get(`vehicles/${id}`).then(response => {
      setVehicle(response.data);

      const features = response.data.features;
      
      const fullRows = Math.floor(features.length / 3);

      let lastRowIndex = features.length - (fullRows * 3);

      while (lastRowIndex !== 3 && lastRowIndex !== 0) {
        features.push({ 
          id: 'null',
          name: '',
          description: '',
          image: '',
        });

        lastRowIndex++;
      }

      setFeatures(features);
    });
  }, []);

  const handleRentButton = useCallback(() => {
    navigate('SuccessfulRental');
  }, []);

  const totalPrice = useMemo(() => {
    if (timeInDays) {
      const price = vehicle.daily_price * timeInDays;

      return price
    }
  }, [vehicle, timeInDays]);

  const getFormattedGear = useMemo(() => {
    switch (vehicle.gear) {
      case 'automatic': 
        return 'Automático';
      case 'manual':
        return 'Manual';
      default: 
        return 'Manual';
    }
  }, [vehicle]);

  const getFormattedFuel = useMemo(() => {
    switch (vehicle.fuel) {
      case 'gasoline': 
        return 'Gasolina';
      case 'eletrical':
        return 'Elétrico';
      case 'flex': 
        return 'Flex';
    }
  }, [vehicle]);

  return (
    <Container>
      <ListContainer 
        data={features}
        keyExtractor={feature => feature.id}
        numColumns={3}
        ListHeaderComponent={() => (
          <>
            <Header>
              <BackButton>
                <FeatherIcon name="chevron-left" size={20} color="#aeaeb3" />
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
            </VehicleContainer>
          </>
        )}
        ListEmptyComponent={() => (
          <FeaturesContainer>
            <Feature>
              <FeatureIcon>
                <FeatherIcon name="sliders" size={28} color="#47474d" />
              </FeatureIcon>
              <FeatureDescription>{getFormattedGear}</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureIcon>
                  <FeatherIcon name="droplet" size={28} color="#47474d" />
              </FeatureIcon>
              <FeatureDescription>{getFormattedFuel}</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureIcon>
                  <FeatherIcon name="tag" size={28} color="#47474d" />
              </FeatureIcon>
              <FeatureDescription>{vehicle.brand}</FeatureDescription>
            </Feature>
          </FeaturesContainer>
        )}
        renderItem={({ item: feature }) => (
          <Feature transparent={feature.id === 'null'}>
            <FeatureIcon />
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        )}
        ListFooterComponent={() => (
          <>
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
          </>
        )}
      />

      <FooterContainer>
        <PriceContainer>
          <PriceCalculationContainer>
            <Subtitle>Total</Subtitle>
            <PriceCalculationText>R$ {vehicle.daily_price} * {timeInDays} diárias</PriceCalculationText>
          </PriceCalculationContainer>

          <TotalPrice>R$ { totalPrice }</TotalPrice>
        </PriceContainer>

        <Button 
          text="Alugar agora"
          onPress={handleRentButton}
        />
      </FooterContainer>
    </Container>
  );
};

export default VehicleDetails;

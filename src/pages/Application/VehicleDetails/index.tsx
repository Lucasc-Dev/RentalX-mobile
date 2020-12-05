import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { usePeriod } from '../../../hooks/PeriodContext';
import api from '../../../services/api';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';

import { 
  Container,
  ListContainer,
  Header,
  BackButton,
  ImageDotsContainer,
  ImageDot,
  VehicleContainer,
  ImageContainer,
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
  ArrowIconContainer,
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
  fuel: string;
  gear: string;
  images: {
    id: string;
    image_url: string;
  }[];
}

interface VehicleDetailsParams {
  id: string;
  onlyDetails?: boolean;
}

const VehicleDetails: React.FC = () => {
  const { params } = useRoute();
  const { period, timeInDays, formattedStartDate, formattedEndDate } = usePeriod();
  const { reset, goBack } = useNavigation();

  const { id, onlyDetails } = params as VehicleDetailsParams;

  const [features, setFeatures] = useState<Feature[]>([]);
  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    api.get(`vehicles/${id}`).then(response => {
      setVehicle(response.data);

      const features = response.data.features;
      
      if (features) {
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
      }      
    });
  }, []);

  const handleRentButton = useCallback(async () => {
    try {
      const request = {
        vehicle_id: id,
        start_date: period.start_date,
        end_date: period.end_date,
      }

      await api.post('rentals', request);

      reset({
        index: 0,
        routes: [
          { name: 'SuccessfulRental' },
        ]
      });
    }catch {
      Alert.alert(
        'Falha ao alugar este veículo.',
        'Não foi possível alugar este veículo, tente novamente.',
      );

      reset({
        index: 0,
        routes: [
          { name: 'TabPagesStack' },
        ]
      });
    }
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
      case 'eletronical':
        return 'Elétrico';
      case 'flex': 
        return 'Flex';
    }
  }, [vehicle]);

  return vehicle.id ? (
    <Container>
      <ListContainer 
        data={features}
        keyExtractor={feature => feature.id}
        numColumns={3}
        ListHeaderComponent={() => (
          <>
            <Header>
              <BackButton onPress={goBack}>
                <FeatherIcon name="chevron-left" size={20} color="#aeaeb3" />
              </BackButton>
  
              <ImageDotsContainer>
                { 
                  vehicle.images.map((image, index) => (
                    <ImageDot key={image.id} isSelected={index === currentImage} />                  
                  )) 
                }
              </ImageDotsContainer>
            </Header>
  
            <VehicleContainer>
              <ImageContainer>
                { vehicle.images.map(image => (
                  <VehicleImage key={image.id} source={{ uri: image.image_url }} />
                ))}
              </ImageContainer>
  
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
  
                <PeriodDateText>{formattedStartDate}</PeriodDateText>
              </DateContainer>
  
              <ArrowIconContainer>
                <FeatherIcon name="arrow-right" size={18} color="#aeaeb3"/>
              </ArrowIconContainer>
  
              <DateContainer>
                <Subtitle>Até</Subtitle>
  
                <PeriodDateText>{formattedEndDate}</PeriodDateText>
              </DateContainer>
            </PeriodContainer>
          </>
        )}
      />
      {!onlyDetails && (
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
      )}
    </Container>
  ) : null;
};

export default VehicleDetails;

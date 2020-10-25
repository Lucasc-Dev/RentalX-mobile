import React from 'react';
import { Image } from 'react-native';

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

const VehicleDetails: React.FC = () => {
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
        <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }}/>

        <InfoContainer>
          <TextContainer>
            <Subtitle>Lamborghini</Subtitle>
            <VehicleName>Huracan</VehicleName>
          </TextContainer>
          <TextContainer>
            <Subtitle>Ao dia</Subtitle>
            <VehiclePrice>R$ 580</VehiclePrice>
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
            <PriceCalculationText>R$ 580 * 3 diárias</PriceCalculationText>
          </PriceCalculationContainer>

          <TotalPrice>R$ 1,740</TotalPrice>
        </PriceContainer>

        <Button 
          text="Alugar agora"
        />
      </Bottom>
    </Container>
  );
};

export default VehicleDetails;

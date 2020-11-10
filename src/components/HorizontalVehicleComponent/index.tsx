import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { 
  VehicleContainer,
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  VehicleImage,
  PeriodContainer,
  PeriodUtilizingText,
  DateContainer,
  PeriodText,
} from './styles';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  daily_price: number;
  image: string;
  fuel: string;
}

interface HorizontalVehicleComponentProps {
  vehicle: Vehicle;
  period?: {
    start_date: string;
    end_date: string;
    inUse: boolean;
  }
}

const HorizontalVehicleComponent: React.FC<HorizontalVehicleComponentProps> = ({ vehicle, period }) => {
  const { navigate } = useNavigation();

  const handleClickVehicle = useCallback(() => {
    navigate('VehicleDetails', { id: vehicle.id });
  }, [navigate, vehicle]);

  return (
    <VehicleContainer>
      <Vehicle onPress={handleClickVehicle} >
        <VehicleInfoContainer>
          <TextContainer>
            <VehicleSubtitle>{vehicle.brand}</VehicleSubtitle>
            <VehicleTitle>{vehicle.name}</VehicleTitle>
          </TextContainer>

          <TextContainer>
            <VehicleSubtitle>Ao dia</VehicleSubtitle>
            <VehiclePrice>R$ {vehicle.daily_price}</VehiclePrice>
          </TextContainer>
        </VehicleInfoContainer>

        <Icon name="droplet" size={20} color="#aeaeb3"/>

        <VehicleImage source={{ uri: vehicle.image }} />
      </Vehicle>
      { period && (
        <PeriodContainer inUse={period.inUse} >
          {period.inUse ? (
            <PeriodUtilizingText>Utilizando até 17 Junho 2020</PeriodUtilizingText>
          ) : (
            <>
              <VehicleSubtitle>Período</VehicleSubtitle>
              <DateContainer>
                <PeriodText>17 Junho 2019</PeriodText>

                <Icon name="arrow-right" size={20} color="#aeaeb3" />

                <PeriodText>22 Junho 2020</PeriodText>
              </DateContainer>
            </>
          )}
        </PeriodContainer>
      )}
    </VehicleContainer>
  );
};

export default HorizontalVehicleComponent;

import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { convert } from '../../utils/ConvertMonth';
import { isBefore } from 'date-fns';

import Icon from 'react-native-vector-icons/Feather';

import { 
  VehicleContainer,
  Vehicle,
  VehicleInfoContainer,
  FuelContainer,
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
    start_date: Date;
    end_date: Date;
  }
  onlyDetails?: boolean;
}

const HorizontalVehicleComponent: React.FC<HorizontalVehicleComponentProps> = ({ 
  vehicle, period, onlyDetails 
}) => {
  const { navigate } = useNavigation();

  const handleClickVehicle = useCallback(() => {
    navigate('VehicleDetails', { id: vehicle.id, onlyDetails });
  }, [navigate, vehicle]);

  const formattedStartDate = useMemo(() => {
    if (period) {
      const month = convert(period.start_date.getMonth());
  
      return `${period.start_date.getDate()} ${month} ${period.start_date.getFullYear()}`;
    }
  }, [period]);

  const formattedEndDate = useMemo(() => {
    if (period) {
      const month = convert(period.end_date.getMonth());
  
      return `${period.end_date.getDate()} ${month} ${period.end_date.getFullYear()}`;
    }
  }, [period]);

  const isInUse = useMemo(() => {
    if (period) {
      const currentDate = new Date();

      const isBeforeEndDate = isBefore(currentDate, period.end_date);

      return isBeforeEndDate;
    }
    return false;
  }, [period]);

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

        <FuelContainer>
          <Icon name="droplet" size={20} color="#aeaeb3" />
        </FuelContainer>

        <VehicleImage source={{ uri: vehicle.image }} />
      </Vehicle>
      { period && (
        <PeriodContainer inUse={isInUse} >
          {isInUse ? (
            <PeriodUtilizingText>Utilizando até {formattedEndDate}</PeriodUtilizingText>
          ) : (
            <>
              <VehicleSubtitle>Período</VehicleSubtitle>
              <DateContainer>
                <PeriodText>{formattedStartDate}</PeriodText>

                <Icon name="arrow-right" size={20} color="#aeaeb3" />

                <PeriodText>{formattedEndDate}</PeriodText>
              </DateContainer>
            </>
          )}
        </PeriodContainer>
      )}
    </VehicleContainer>
  );
};

export default HorizontalVehicleComponent;

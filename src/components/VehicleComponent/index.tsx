import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  VehicleImage,
  VehicleImagesInfo,
  VehicleImageDot,
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

interface VehicleComponentProps {
  vehicle: Vehicle;
}

const VehicleComponent: React.FC<VehicleComponentProps> = ({ vehicle }) => {
  const { navigate } = useNavigation();

  const handleClickVehicle = useCallback(() => {
    navigate('VehicleDetails', { id: vehicle.id });
  }, [navigate, vehicle]);

  return (
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

      <VehicleImage source={{ uri: vehicle.image }} />

      <VehicleInfoContainer>
        <Icon name="droplet" size={20} color="#aeaeb3"/>

        <VehicleImagesInfo>
          <VehicleImageDot isSelected />
          <VehicleImageDot isSelected={false} />
          <VehicleImageDot isSelected={false} />
        </VehicleImagesInfo>
      </VehicleInfoContainer>
    </Vehicle>
  );
};

export default VehicleComponent;
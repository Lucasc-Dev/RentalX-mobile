import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  ImageContainer,
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
  fuel: string;
  images: {
    id: string;
    image_url: string;
  }[];
}

interface VehicleComponentProps {
  vehicle: Vehicle;
}

const VehicleComponent: React.FC<VehicleComponentProps> = ({ vehicle }) => {
  const { navigate } = useNavigation();

  const [currentImage, setCurrentImage] = useState(0);

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

      <ImageContainer>
        { vehicle.images.map(image => (
          <VehicleImage key={image.id} source={{ uri: image.image_url }} />
        ))}
      </ImageContainer>

      <VehicleInfoContainer>
        <Icon name="droplet" size={20} color="#aeaeb3"/>

        <VehicleImagesInfo>
          { vehicle.images.map((image, index) => (
              <VehicleImageDot key={image.id} isSelected={index === currentImage} />                  
          ))}
        </VehicleImagesInfo>
      </VehicleInfoContainer>
    </Vehicle>
  );
};

export default VehicleComponent;

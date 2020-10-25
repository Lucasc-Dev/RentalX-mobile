import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather'

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

const VehiclesList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: '0765c4ad-b9de-47af-bc8e-5155a81b2363',
      name: 'Versa',
      brand: 'Nissan',
      model: '2020',
      daily_price: 650.00,
      image: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png',
      fuel: 'flex',
    },
    {
      id: '0765c4ad-b9de-47af-bc8e-5155a81b2364',
      name: 'Versa',
      brand: 'Nissan',
      model: '2020',
      daily_price: 650.00,
      image: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png',
      fuel: 'flex',
    },
    {
      id: '0765c4ad-b9de-47af-bc8e-5155a81b2365',
      name: 'Versa',
      brand: 'Nissan',
      model: '2020',
      daily_price: 650.00,
      image: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png',
      fuel: 'flex',
    },
    {
      id: '0765c4ad-b9de-47af-bc8e-5155a81b2366',
      name: 'Versa',
      brand: 'Nissan',
      model: '2020',
      daily_price: 650.00,
      image: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png',
      fuel: 'flex',
    },
  ]);

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


      <VehiclesContainer 
        data={vehicles}
        keyExtractor={(vehicle) => vehicle.id}
        ListHeaderComponent={
          <TitleContainer>
            <Title>Resultados</Title>
    
            <OptionsContainer>
              <TotalVehicles>3 carros</TotalVehicles>
              
              <FiltersButton>
                <Icon name="filter" size={20} color="#47474d" />
              </FiltersButton>
            </OptionsContainer>
          </TitleContainer>
        }
        renderItem={({ item: vehicle }) => (
          <Vehicle>
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
        )}
      />
    </Container>
  );
};

export default VehiclesList;

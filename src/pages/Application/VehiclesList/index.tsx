import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import FiltersModal from '../../../components/FiltersModal';

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

interface Filters {
  min_range: number;
  max_range: number;
  fuel: string;
  gear: string;
}

const VehiclesList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>();

  const [startDate, setStartDate] = useState('16 Julho 2020');
  const [endDate, setEndDate] = useState('20 Julho 2020');

  const [filters, setFilters] = useState<Filters>({
    min_range: 0,
    max_range: 1500,
    fuel: '',
    gear: '',
  });

  const [filterOpen, setFilterOpen] = useState(false);
  
  useEffect(() => {
    setFilterOpen(false);
  }, [filters]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (filterOpen) {
          setFilterOpen(false);
          return true;
        }
      };
  
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [filterOpen])
  );

  const handleUpdateFilters = useCallback((filters: Filters) => {
    setFilters(filters);
  }, []);

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

      <FiltersModal modalOpened={filterOpen} filtersUpdater={handleUpdateFilters} />

      <VehiclesContainer 
        data={vehicles}
        keyExtractor={(vehicle) => vehicle.id}
        ListHeaderComponent={
          <TitleContainer>
            <Title>Resultados</Title>
    
            <OptionsContainer>
              <TotalVehicles>3 carros</TotalVehicles>
              
              <FiltersButton onPress={() => setFilterOpen(true)}>
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

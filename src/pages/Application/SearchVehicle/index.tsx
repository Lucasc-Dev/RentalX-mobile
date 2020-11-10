import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { usePeriod } from '../../../hooks/PeriodContext';
import api from '../../../services/api';

import HorizontalVehicleComponent from '../../../components/HorizontalVehicleComponent';

import {
  Container,
  Header,
  HeaderTitleContainer,
  Title,
  TotalVehicles,
  Search,
  SearchInputBox,
  SearchInput,
  SearchIconBox,
  VehiclesContainer,
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

const SearchVehicle: React.FC = () => {
  const { period } = usePeriod();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = {
      ...period,
      search,
      page: 0,
    }

    api.get('vehicles', { params: { ...request } }).then(response => {
      setVehicles(response.data.vehicles);
      setTotalVehicles(response.data.count);
      setPage(1);
    });
  }, [search, period]);

  const loadVehicles = useCallback(async () => {
    if (loading) {
      return;
    }

    if (totalVehicles > 0 && vehicles.length === totalVehicles) {
      return;
    }

    setLoading(true);

    const response = await api.get('vehicles', { params: { ...period, search, page } });

    setVehicles([
      ...vehicles,
      ...response.data.vehicles,
    ]);
    setTotalVehicles(response.data.count);
    setPage(state => state + 1);

    setLoading(false);
  }, [loading, totalVehicles, vehicles, page, search, period]);

  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <Title>Listagem</Title>

          <TotalVehicles>{totalVehicles} carros</TotalVehicles>
        </HeaderTitleContainer>

        <Search>
          <SearchInputBox>
            <SearchInput 
              placeholder="Qual carro você procura?" 
              onChangeText={value => {setSearch(value)}}
            />
          </SearchInputBox>

          <SearchIconBox>
            <Icon name="search" size={24} color="#47474d" />
          </SearchIconBox>
        </Search>
      </Header>

      <VehiclesContainer
        data={vehicles}
        keyExtractor={vehicle => vehicle.id}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {loadVehicles()}}
        onEndReachedThreshold={0.25}
        renderItem={({ item: vehicle }) => (
          <HorizontalVehicleComponent period={{ start_date: '10 junho', end_date: '20 julho', inUse: false }} vehicle={vehicle} />
        )}
      />
    </Container>
  );
};

export default SearchVehicle;

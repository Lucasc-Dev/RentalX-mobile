import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { usePeriod } from '../../../hooks/PeriodContext';
import api from '../../../services/api';

import Icon from 'react-native-vector-icons/Feather'

import FiltersModal from '../../../components/FiltersModal';
import VehicleComponent from '../../../components/VehicleComponent';

import { 
  Container,
  Header,
  DateContainer,
  DateField,
  BackButton,
  ChevronIcon,
  DateFieldTitle,
  DateFieldInfo,
  VehiclesContainer,
  TitleContainer,
  Title,
  OptionsContainer,
  TotalVehicles,
  FiltersButton,
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

interface Request {
  start_date: Date;
  end_date: Date;
  min_range: number;
  max_range: number;
  page: number;
  fuel: string;
  gear: string;
}

const VehiclesList: React.FC = () => {
  const { reset } = useNavigation();
  const { period, formattedStartDate, formattedEndDate } = usePeriod();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<Request>({
    ...period,
    min_range: 0,
    max_range: 1500,
    page: 0,
    fuel: '',
    gear: '',
  });

  useEffect(() => {
    if (!loading) {
      api.get('vehicles', { params: { ...request } }).then(response => {
        setVehicles(response.data.vehicles);
        setTotalVehicles(response.data.count);
        setRequest(state => ({...state, page: state.page + 1}));
      });
    }
  }, [request.min_range, request.max_range, request.fuel, request.gear]);

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

  const loadVehicles = useCallback(async () => {
    if (loading) {
      return;
    }

    if (totalVehicles > 0 && vehicles.length === totalVehicles) {
      return;
    }

    setLoading(true);

    const response = await api.get('vehicles', { params: { ...request } });

    setVehicles([
      ...vehicles,
      ...response.data.vehicles,
    ]);
    setTotalVehicles(response.data.count);
    setRequest(state => ({...state, page: state.page + 1}));
    
    setLoading(false);
  }, [api, request, vehicles, loading, totalVehicles]);

  const handleUpdateFilters = useCallback(async (filters: Filters) => {
    setVehicles([]);
    setRequest({
      ...period,
      min_range: filters.min_range,
      max_range: filters.max_range,
      page: 0,
      fuel: filters.fuel,
      gear: filters.gear,
    });
    setFilterOpen(false);
  }, [request,period]);

  const handleGoBackButton = useCallback(() => {
    reset({
      index: 0,
      routes: [
        { name: 'SelectPeriod' },
      ]
    });
  }, []);

  return (
    <Container>
      <Header>
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInfo>{formattedStartDate}</DateFieldInfo>
          </DateField>

          <BackButton onPress={handleGoBackButton} >
            <ChevronIcon name="chevron-down" size={20} color="#7a7a80" />
          </BackButton>

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInfo>{formattedEndDate}</DateFieldInfo>
          </DateField>
        </DateContainer>
      </Header>

      <FiltersModal modalOpened={filterOpen} filtersUpdater={handleUpdateFilters} />

      <VehiclesContainer 
        data={vehicles}
        keyExtractor={(vehicle) => vehicle.id}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {loadVehicles()}}
        onEndReachedThreshold={0.35}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={
          <TitleContainer>
            <Title>Resultados</Title>
    
            <OptionsContainer>
              <TotalVehicles>{totalVehicles} carros</TotalVehicles>
              
              <FiltersButton onPress={() => setFilterOpen(true)}>
                <Icon name="filter" size={20} color="#47474d" />
              </FiltersButton>
            </OptionsContainer>
          </TitleContainer>
        }
        renderItem={({ item: vehicle }) => (
          <VehicleComponent 
            vehicle={vehicle}
          />
        )}
      />
    </Container>
  );
};

export default VehiclesList;
 
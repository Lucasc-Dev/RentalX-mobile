import React, { useCallback, useEffect, useState } from 'react';
import HorizontalVehicleComponent from '../../../components/HorizontalVehicleComponent';

import api from '../../../services/api';

import { 
  Container,
  Header,
  HeaderTitleContainer,
  Title,
  TotalVehicles,
  VehiclesList,
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

interface Rental {
  id: string;
  start_date: string;
  end_date: string;
  vehicle: Vehicle;
}

const UserRentals: React.FC = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [totalRentals, setTotalRentals] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('rentals', { params: { page: 0 } }).then(response => {
      setRentals(response.data.rentals);
      setTotalRentals(response.data.count);
      setPage(1);
    });
  }, []);

  const loadVehicles = useCallback(async () => {
    if (loading) {
      return;
    }

    if (totalRentals > 0 && rentals.length === totalRentals) {
      return;
    }

    setLoading(true);

    const response = await api.get('rentals', { params: { page } });

    setRentals(state => ([
      ...state,
      ...response.data.rentals,
    ]));
    setTotalRentals(response.data.count);
    setPage(state => state + 1);

    setLoading(false);
  }, [loading, totalRentals, rentals, page]);

  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <Title>Agendamentos</Title>

          <TotalVehicles>{totalRentals} carros</TotalVehicles>
        </HeaderTitleContainer>
      </Header>

      <VehiclesList
        data={rentals}
        keyExtractor={rental => rental.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadVehicles}
        onEndReachedThreshold={0.25}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item: rental }) => (
          <HorizontalVehicleComponent 
            period={{ start_date: new Date(rental.start_date), end_date: new Date(rental.end_date) }} 
            vehicle={rental.vehicle} 
            onlyDetails
          />
        )}
      />
    </Container>
  );
};

export default UserRentals;

import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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

interface PeriodContainerProps {
    inUtilization?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    
    background-color: #1b1b1f;
`;

export const HeaderTitleContainer = styled.View`
    margin: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 25px;
    color: #FFF;
`;

export const TotalVehicles = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 13px;
    color: #7a7a80;
`;

export const VehiclesList = styled(FlatList as new () => FlatList<Rental>)`
    padding: 24px 0;
`;

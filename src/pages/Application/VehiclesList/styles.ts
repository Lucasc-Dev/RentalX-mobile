import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';

interface Vehicle {
    id: string;
    name: string;
    brand: string;
    model: string;
    daily_price: number;
    image: string;
    fuel: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 90px;
    background-color: #1b1b1f;
`;

export const DateContainer = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateField = styled.View`

`;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

export const ChevronIcon = styled(FeatherIcon)`
    padding-top: 24px;
`;

export const DateFieldTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #7a7a80;
`;

export const DateFieldInfo = styled.Text`
    margin-top: 6px;
    font-family: 'Inter-Medium';
    font-size: 14px;
    color: #FFF;
`;

export const VehiclesContainer = styled(FlatList as new () => FlatList<Vehicle>)`

`;

export const TitleContainer = styled.View`
    padding: 24px 24px 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 24px;
    color: #47474d;
`;

export const OptionsContainer = styled.View`
    width: 96px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalVehicles = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 12px;
    text-align: center;
    color: #AEAEB3;
`;

export const FiltersButton = styled.TouchableOpacity`

`;


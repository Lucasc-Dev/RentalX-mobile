import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';

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
    height: 115px;
    background-color: #1b1b1f;
`;

export const HeaderTitleContainer = styled.View`
    margin: 28px 24px 0;
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

export const Search = styled.View`
    margin: 24px 16px 0;
    background-color: #FFF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SearchInputBox = styled.View`
    flex: 1;
    height: 56px;
    background-color: #f4f5f6;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 24px;

    font-family: 'Inter-Regular';
    font-size: 15px;
    color: #7a7a80;
`;

export const SearchIconBox = styled(RectButton)`
    width: 56px;
    height: 56px;
    margin-left: 2px;
    background-color: #f4f5f6;
    justify-content: center;
    align-items: center;
`;

export const VehiclesContainer = styled(FlatList as new () => FlatList<Vehicle>)`
    margin-top: 27px;
    padding: 16px 0;
`;

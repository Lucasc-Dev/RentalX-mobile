import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface FuelProps {
    selected?: boolean;
}

interface GearProps {
    selected?: boolean;
}

export const Container = styled.ScrollView.attrs({ zIndex: 20 })`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
`;

export const ModalContainer = styled.View`
    width: 100%;
    margin-top: 140px;
    padding: 0 24px 24px;
    background-color: #FFF;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

export const Header = styled.View`
    padding: 24px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: #ebebf0;
    border-bottom-width: 1px;
`;

export const HeaderTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 25px;
    color: #47474d;
`;

export const ClearFiltersButton = styled.TouchableOpacity`

`;

export const ClearFiltersText = styled.Text`
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #aeaeb3;
`;

export const FilterField = styled.View`
    margin-top: 32px;
`;

export const PriceRange = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #dc1637;
`;

export const FilterTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FilterTitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 20px;
    color: #474747;
`;

export const RangeSliderContainer = styled.View`
    margin: 14px 0 -10px;
`;

export const FuelContainer = styled.View`
    height: 74px;
    padding: 4px;
    margin-top: 16px;
    background-color: #f4f5f6;
    flex-direction: row;
    justify-content: space-between;
`;

export const Fuel = styled(RectButton)<FuelProps>`
    width: 33%;
    padding: 8px;
    background-color: ${props => props.selected ? '#FFF' : '#f4f5f6'};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const FuelIcon = styled(Icon).attrs({
    size: 20,
})<FuelProps>`
    color: ${props => props.selected ? '#dc1637' : '#aeaeb3'};
`;

export const FilterDescription = styled.Text<FuelProps>`
    font-family: 'Inter-Medium';
    font-size: 15px;
    text-align: center;
    color: ${props => props.selected ? '#47474d' : '#aeaeb3'};
`;

export const GearContainer = styled.View`
    height: 56px;
    padding: 4px;
    margin: 16px 0 40px;
    background-color: #f4f5f6;
    flex-direction: row;
    justify-content: space-between;
`;

export const Gear = styled.View<GearProps>`
    width: 50%;
    background-color: ${props => props.selected ? '#FFF' : '#f4f5f6'};
    justify-content: center;
    align-items: center;
`;

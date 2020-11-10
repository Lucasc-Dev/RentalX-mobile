import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Feature {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface FeatureProps {
    transparent?: boolean;
}

interface VehicleImageDotProps {
    isSelected?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const ListContainer = styled(FlatList as new () => FlatList<Feature>).attrs({
    showsVerticalScrollIndicator: false
})`
    margin: 0 16px;
    background-color: #FFF;
`;

export const Header = styled.View`
    margin: 24px 8px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 32px;
    justify-content: center;
`;

export const ImageDotsContainer = styled.View`
    flex-direction: row;
`;

export const ImageDot = styled.View<VehicleImageDotProps>`
    margin-left: 8px;
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: ${props => props.isSelected ? '#3d3d4d' : '#c9c9d4'};
`;

export const VehicleContainer = styled.View`
    margin-top: 16px;
    justify-content: center;
`;

export const VehicleImage = styled.Image`
    width: 280px;
    height: 132px;
    margin: auto;
`;

export const InfoContainer = styled.View`
    margin: 24px 8px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextContainer = styled.View`

`;

export const Subtitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 10px;
    color: #aeaeb3;
    text-transform: uppercase;
`;

export const VehicleName = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 25px;
    color: #47474d;
`;

export const VehiclePrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 25px;
    color: #dc1637;
`;

export const FeaturesContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Feature = styled.View<FeatureProps>`
    height: 92px;
    margin: 4px;
    padding: 12px;
    background-color: ${props => props.transparent ? 'transparent' : '#f4f5f6'};
    flex-grow: 1;
    flex-basis: 0;
    
    align-items: center;
    justify-content: space-between;
`;

export const FeatureIcon = styled.View`
    margin-top: 6px;
    justify-content: center;
    align-items: center;
`;

export const FeatureDescription = styled.Text`
    font-family: 'Inter-Medium';
    font-size: 13px;
    color: #7a7a80;
    text-align: center;
`;

export const PeriodContainer = styled.View`
    margin: 40px 8px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateContainer = styled.View`
    height: 38px;
    justify-content: space-between;
`;

export const PeriodDateText = styled.Text`
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #dc1637;
`;

export const FooterContainer = styled.View`
    width: 100%;
    padding: 24px 0 16px;
    background-color: #f4f5f6;
`;

export const PriceContainer = styled.View`
    margin: 0 24px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PriceCalculationContainer = styled.View`

`;

export const PriceCalculationText = styled.Text`
    padding-top: 8px;
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #47474d;
`;

export const TotalPrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 24px;
    color: #3d3d3d;
`;

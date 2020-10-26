import styled from 'styled-components/native';

interface VehicleImageDotProps {
    isSelected?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View`
    margin: 32px 24px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    width: 32px;
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
    margin: 24px;
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
    margin: 0 16px;
    flex-direction: row;
`;

export const Feature = styled.View`
    width: 109px;
    height: 92px;
    padding: 16px;
    background-color: #f4f5f6;
    flex-direction: column;
    justify-content: space-between;
`;

export const FeatureIcon = styled.Image`

`;

export const FeatureDescription = styled.Text`
    font-family: 'Inter-Medium';
    font-size: 13px;
    color: #7a7a80;
    text-align: center;
`;

export const PeriodContainer = styled.View`

`;

export const DateContainer = styled.View`

`;

export const PeriodDateText = styled.Text`

`;

export const Bottom = styled.View`

`;

export const PriceContainer = styled.View`

`;

export const PriceCalculationContainer = styled.View`

`;

export const PriceCalculationText = styled.Text`

`;

export const TotalPrice = styled.Text`

`;

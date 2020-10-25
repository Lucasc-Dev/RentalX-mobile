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

`;

export const VehicleImage = styled.View`

`;

export const InfoContainer = styled.View`

`;

export const TextContainer = styled.View`

`;

export const Subtitle = styled.Text`

`;

export const VehicleName = styled.Text`

`;

export const VehiclePrice = styled.Text`

`;

export const FeaturesContainer = styled.View`

`;

export const Feature = styled.View`

`;

export const FeatureIcon = styled.View`

`;

export const FeatureDescription = styled.Text`

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

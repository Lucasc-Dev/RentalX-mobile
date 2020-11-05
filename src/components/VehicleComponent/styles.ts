import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface VehicleImageDotProps {
    isSelected?: boolean;
}

export const Vehicle = styled(RectButton)`
    height: 250px;
    margin: 16px 24px 0;
    padding: 24px;
    background-color: #f4f5f6;
`;

export const VehicleInfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextContainer = styled.View`
    flex-direction: column;
`;

export const VehicleTitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 20px;
    color: #47474d;
`;

export const VehicleSubtitle = styled.Text`
    text-transform: uppercase;
    font-family: 'Archivo-Medium';
    font-size: 10px;
    color: #aeaeb3;
`;

export const VehiclePrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 20px;
    color: #DC1637;
`;

export const VehicleImage = styled.Image`
    width: 100%;
    height: 130px;
    margin: 8px auto;
`;

export const VehicleImagesInfo = styled.View`
    flex-direction: row;
`;

export const VehicleImageDot = styled.View<VehicleImageDotProps>`
    margin-left: 8px;
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: ${props => props.isSelected ? '#3d3d4d' : '#c9c9d4'};
`;
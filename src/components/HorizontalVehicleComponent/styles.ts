import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface VehicleImageDotProps {
    isSelected?: boolean;
}

export const Vehicle = styled(RectButton)`
    margin: 16px;
    padding: 24px;
    background-color: #f4f5f6;
    flex-direction: row;
    justify-content: space-between;
`;

export const VehicleInfoContainer = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const TextContainer = styled.View`
    margin-right: 8px;
`;

export const VehicleSubtitle = styled.Text`
    font-family: 'Archivo-Medium';
    text-transform: uppercase;
    font-size: 10px;
    color: #aeaeb3;
`;

export const VehicleTitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #47474d;
`;

export const VehiclePrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #dc1637;
`;

export const VehicleImage = styled.Image.attrs({ resizeMode: 'contain' })`
    margin-left: 16px;
    width: 170px;
    height: 90px;
`;

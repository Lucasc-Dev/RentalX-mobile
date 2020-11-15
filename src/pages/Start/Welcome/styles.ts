import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #1b1b1f;
`;

export const VerticalContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Logo = styled.Image`
    
`;

export const TitleContainer = styled.View`

`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-weight: 600;
    line-height: 44px;
    text-align: center;
    font-size: 40px;
    color: #f4f5f6;
`;

export const Subtitle = styled.Text`
    padding-top: 16px;
    font-family: 'Inter-Medium';
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    color: #dedee3;
`;

export const ButtonsContainer = styled.View`
    margin-top: 60px;
`;

export const HorizontalButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled(RectButton)`
    width: 150px;
    height: 56px;
    margin: 0 10px;
`;

export const ButtonText = styled.Text`
    margin: auto;
    font-family: 'Inter-Medium';
    text-align: center;
    font-size: 16px;
    color: #e1e1e6;
`;

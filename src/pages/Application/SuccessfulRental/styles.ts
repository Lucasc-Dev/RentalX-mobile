import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #1b1b1f;
`;

export const ImageBackground = styled.ImageBackground`
    position: absolute;
    margin-top: 66px;
    width: 375px;
    height: 235px;
    opacity: 0.35;
`;

export const DoneImage = styled.Image`
    margin-top: 235px;
    width: 75px;
    height: 75px;
    align-self: center;
`;

export const TitleContainer = styled.View`
    margin-top: 24px;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 30px;
    color: #e1e1e6;
`;

export const Subtitle = styled.Text`
    width: 221px;
    margin-top: 16px;
    font-family: 'Inter-Regular';
    text-align: center;
    font-size: 15px;
    line-height: 26px;
    color: #a8a8b3;
`;

export const Button = styled(RectButton)`
    width: 160px;
    height: 56px;
    margin-top: 60px;
    background-color: #29292e;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const ButtonText = styled.Text`
    font-family: 'Inter-Medium';
    text-align: center;
    font-size: 15px;
    color: #FFF;
`;

import styled from 'styled-components/native';

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
    font-family: 'Inter-Medium-sInt=0';
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    color: #dedee3;
`;

export const ButtonsContainer = styled.View`
    margin-top: 70px;
`;

export const HorizontalButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: 156px;
    height: 56px;
    margin: 0 10px;
`;

export const ButtonText = styled.Text`
    margin: auto;
    font-family: 'Inter-Medium-sInt=0';
    text-align: center;
    font-size: 16px;
    color: #e1e1e6;
`;

export const BackButton = styled.TouchableOpacity`
    width: 156px;
    height: 40px;
    margin: 40px auto 0;
`;

export const BackButtonText = styled.Text`
    margin: auto;
    font-family: 'Archivo-SemiBold';
    /*text-align: center;*/
    font-size: 15px;
    color: #7a7a80;
`;

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
`;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    margin: 24px 0 0 15px;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const TitleContainer = styled.View`
    margin: 80px 0 80px 32px;
    width: 220px;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 38px;
    font-weight: 600;
    line-height: 43px;
    color: #3d3d4d;
`;

export const Subtitle = styled.Text`
    margin-top: 24px;
    font-family: 'Inter-Regular';
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #7a7a80;
`;

export const InputsContainer = styled.View`
`;

export const InfoTitle = styled.Text`
    margin: 0 0 24px 32px;
    font-family: 'Archivo-SemiBold';
    font-size: 20px;
    color: #3d3d4d;
`;
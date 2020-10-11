import styled from 'styled-components/native';
import ReactCheckBox from '@react-native-community/checkbox';

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
    margin: 100px 0 80px 32px;
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
    font-family: 'Inter-Regular-sInt=0';
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #7a7a80;
`;

export const ButtonsContainer = styled.View`
`;

export const HorizontalContainer = styled.View`
    width: 327px;
    margin: 12px 0 20px;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
`;

export const CheckBoxContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CheckBox = styled(ReactCheckBox)`

`;

export const MiniText = styled.Text`
    font-family: 'Inter-Regular-sInt=0';
    font-size: 14px;
    text-align: center;
    color: #737380;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

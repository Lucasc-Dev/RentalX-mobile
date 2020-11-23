import styled from 'styled-components/native';
import ReactCheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: space-between;
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    margin: 24px 0 0 16px;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const TitleContainer = styled.View`
    width: 220px;
    margin: 105px 0 80px 32px;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 38px;
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

export const ButtonsContainer = styled.View`
`;

export const HorizontalContainer = styled.View`
    width: 100%;
    padding: 16px 24px 24px 20px;
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
    font-family: 'Inter-Regular';
    font-size: 14px;
    text-align: center;
    color: #737380;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`

`;

export const Header = styled.View`
    width: 100%;
    height: 90px;
    background-color: #1b1b1f;
`;

export const DateContainer = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateField = styled.View`

`;

export const ChevronIcon = styled(FeatherIcon)`
    padding-top: 24px;
`;

export const DateFieldTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #7a7a80;
`;

export const DateFieldInfo = styled.Text`
    margin-top: 8px;
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #FFF;
`;

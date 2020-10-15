import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 20 },
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: #FFF;
`;

export const Details = styled.View`
    width: 100%;
    height: 240px;
    background-color: #1b1b1f;
`;

export const Title = styled.Text`
    width: 218px;
    margin: 40px 0 0 24px;
    font-family: 'Archivo-SemiBold';
    font-size: 30px;
    color: #FFF;
`;

export const DateContainer = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowIcon = styled.Image`
`;

export const DateField = styled.View`
`;

export const DateFieldTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #7a7a80;
`;

export const DateFieldInput = styled.Text`
    margin-top: 8px;
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #FFF;
`;

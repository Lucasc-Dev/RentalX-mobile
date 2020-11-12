import styled from 'styled-components/native';

interface TabProps { 
    selected: boolean;
}

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 190px;
    background-color: #1b1b1f;
    justify-content: space-between;
`;

export const TopHeaderContainer = styled.View`
    margin: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 25px;
    color: #FFF;
`;

export const ProfileImage = styled.Image`
    width: 180px;
    height: 180px;
    margin: 16px auto; 
    border-radius: 90px;
`;

export const TabContainer = styled.View`
    width: 40%;
    margin: 100px auto 40px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Tab = styled.View<TabProps>`

`;

export const TabText = styled.Text<TabProps>`

`;

export const InputContainer = styled.View`

`;

export const ButtonContainer = styled.View`

`;
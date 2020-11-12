import styled, { css } from 'styled-components/native';

interface TabProps { 
    selected: boolean;
}

export const Container = styled.ScrollView`
    flex: 1;
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
    margin: 114px 24px 24px;
    padding: 0 50px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-color: #ebebf0;
`;

export const Tab = styled.TouchableOpacity<TabProps>`
    padding-bottom: 16px;
    ${props => props.selected && css`
        border-bottom-width: 2px;
        border-bottom-color: #dc1637;
    `}
`;

export const TabText = styled.Text<TabProps>`
    font-family: ${props => props.selected ? 'Archivo-SemiBold' : 'Archivo-Medium'};
    font-size: 20px;
    color: ${props => props.selected ? '#3d3d4d' : '#aeaeb3'};
`;

export const InputContainer = styled.View`

`;

export const ButtonContainer = styled.View`
    margin: 24px 0 16px;
    justify-content: flex-end;
`;
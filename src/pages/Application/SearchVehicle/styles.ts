import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 115px;
    background-color: #1b1b1f;
`;

export const HeaderTitleContainer = styled.View`
    margin: 28px 24px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 25px;
    color: #FFF;
`;

export const TotalVehicles = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 13px;
    color: #7a7a80;
`;

export const Search = styled.View`
    flex-direction: row;
    margin: 24px auto 0;
    background-color: #FFF;
`;

export const SearchInputBox = styled.View`
    width: 285px;
    height: 56px;
    background-color: #f4f5f6;
`;

export const SearchInput = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 0 24px;

    font-family: 'Inter-Regular';
    font-size: 15px;
    color: #7a7a80;
`;

export const SearchIconBox = styled.View`
    width: 56px;
    height: 56px;
    margin-left: 2px;
    background-color: #f4f5f6;
    justify-content: center;
    align-items: center;
`;

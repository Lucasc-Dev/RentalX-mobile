import styled from 'styled-components/native';

export const Container = styled.ScrollView`
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
    z-index: 10;
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

export const VehiclesContainer = styled.View.attrs({
    paddingVertical: 28,
})``;

export const Vehicle = styled.View`
    margin: 16px;
    padding: 24px;
    background-color: #f4f5f6;
    flex-direction: row;
    justify-content: space-between;
`;

export const VehicleInfoContainer = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const TextContainer = styled.View`
    margin-right: 8px;
`;

export const VehicleSubtitle = styled.Text`
    font-family: 'Archivo-Medium';
    text-transform: uppercase;
    font-size: 10px;
    color: #aeaeb3;
`;

export const VehicleTitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #47474d;
`;

export const VehiclePrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #dc1637;
`;

export const VehicleImage = styled.Image.attrs({ resizeMode: 'contain' })`
    margin-left: 16px;
    width: 170px;
    height: 90px;
`;

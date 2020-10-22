import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
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

export const VehiclesContainer = styled.ScrollView.attrs({
    paddingBottom: 24
})`
    
`;

export const TitleContainer = styled.View`
    padding: 24px 24px 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 24px;
    color: #47474d;
`;

export const OptionsContainer = styled.View`
    width: 96px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalVehicles = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 12px;
    text-align: center;
    color: #AEAEB3;
`;

export const FiltersButton = styled.TouchableOpacity`

`;

export const Vehicle = styled.View`
    height: 250px;
    margin: 16px 24px 0;
    padding: 24px;
    background-color: #f4f5f6;
`;

export const VehicleInfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextContainer = styled.View`
    flex-direction: column;
`;

export const VehicleTitle = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 20px;
    color: #47474d;
`;

export const VehicleSubtitle = styled.Text`
    text-transform: uppercase;
    font-family: 'Archivo-Medium';
    font-size: 10px;
    color: #aeaeb3;
`;

export const VehiclePrice = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 20px;
    color: #DC1637;
`;

export const VehicleImage = styled.Image`
    width: 100%;
    height: 130px;
    margin: 8px auto;
`;

export const VehicleImagesInfo = styled.View`
    flex-direction: row;
`;

export const VehicleImagesIcon = styled.Image`
    margin-left: 8px;
`;
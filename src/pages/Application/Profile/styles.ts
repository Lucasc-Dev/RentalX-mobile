import styled from 'styled-components/native';

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

export const ProfileName = styled.Text`
    width: 220px;
    margin: 100px auto 40px;
    font-family: 'Archivo-SemiBold';
    font-size: 30px;
    text-align: center;
    color: #3d3d3d;
`;

export const InfoSection = styled.View`
`;

export const Rentals = styled.View`
    padding: 18px 0;
    margin: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: #E6E6F0;
    border-bottom-width: 1px;
`;

export const InfoTitle = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 15px;
    color: #7a7a80;
`;

export const InfoDescription = styled.Text`
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #47474d;
`;

export const FavoriteVehicle = styled.View`
`;

export const FavoriteVehicleHeader = styled.View`
    margin: 20px 24px 4px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

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


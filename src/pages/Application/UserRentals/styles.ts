import styled from 'styled-components/native';

interface PeriodContainerProps {
    inUtilization?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    
    background-color: #1b1b1f;
`;

export const HeaderTitleContainer = styled.View`
    margin: 24px;
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

export const VehiclesContainer = styled.ScrollView``;

export const Vehicle = styled.View`
    margin: 16px 16px 0;
`;

export const VehicleContainer = styled.View`
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

export const PeriodContainer = styled.View<PeriodContainerProps>`
    margin-top: 2px;
    padding: 12px 24px;
    background-color: ${props => props.inUtilization ? '#DAF3E5' : '#f4f5f6' };
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateContainer = styled.View`
    width: 220px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PeriodText = styled.Text`
    font-family: 'Inter-Regular';
    font-size: 13px;
    color: #47474D;
`;

export const PeriodUtilizingText = styled.Text`
    width: 100%;
    font-family: 'Archivo-Medium';
    font-size: 15px;
    color: #03b252;
    text-align: center;
`;

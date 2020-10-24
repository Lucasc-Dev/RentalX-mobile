import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Header,
  HeaderTitleContainer,
  Title,
  TotalVehicles,
  VehiclesContainer,
  Vehicle,
  VehicleContainer,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  VehicleImage,
  PeriodContainer,
  DateContainer,
  PeriodText,
} from './styles';

const UserRentals: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <Title>Agendamentos</Title>

          <TotalVehicles>12 carros</TotalVehicles>
        </HeaderTitleContainer>
      </Header>

      <VehiclesContainer>
        <Vehicle>
          <VehicleContainer>
            <VehicleInfoContainer>
              <TextContainer>
                <VehicleSubtitle>Lamborghini</VehicleSubtitle>
                <VehicleTitle>Huracan</VehicleTitle>
              </TextContainer>
              <TextContainer>
                <VehicleSubtitle>Ao dia</VehicleSubtitle>
                <VehiclePrice>R$ 120</VehiclePrice>
              </TextContainer>
            </VehicleInfoContainer>

            <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

            <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
          </VehicleContainer>
          <PeriodContainer>
            <VehicleSubtitle>Período</VehicleSubtitle>

            <DateContainer>
              <PeriodText>17 Junho 2019</PeriodText>

              <Icon name="arrow-right" size={20} color="#aeaeb3" />

              <PeriodText>22 Junho 2020</PeriodText>
            </DateContainer>
          </PeriodContainer>
        </Vehicle>


        <Vehicle>
          <VehicleContainer>
            <VehicleInfoContainer>
              <TextContainer>
                <VehicleSubtitle>Lamborghini</VehicleSubtitle>
                <VehicleTitle>Huracan</VehicleTitle>
              </TextContainer>
              <TextContainer>
                <VehicleSubtitle>Ao dia</VehicleSubtitle>
                <VehiclePrice>R$ 120</VehiclePrice>
              </TextContainer>
            </VehicleInfoContainer>

            <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

            <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
          </VehicleContainer>
          <PeriodContainer>
            <VehicleSubtitle>Período</VehicleSubtitle>

            <DateContainer>
              <PeriodText>17 Junho 2019</PeriodText>

              <Icon name="arrow-right" size={20} color="#aeaeb3" />

              <PeriodText>22 Junho 2020</PeriodText>
            </DateContainer>
          </PeriodContainer>
        </Vehicle>


        <Vehicle>
          <VehicleContainer>
            <VehicleInfoContainer>
              <TextContainer>
                <VehicleSubtitle>Lamborghini</VehicleSubtitle>
                <VehicleTitle>Huracan</VehicleTitle>
              </TextContainer>
              <TextContainer>
                <VehicleSubtitle>Ao dia</VehicleSubtitle>
                <VehiclePrice>R$ 120</VehiclePrice>
              </TextContainer>
            </VehicleInfoContainer>

            <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

            <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
          </VehicleContainer>
          <PeriodContainer>
            <VehicleSubtitle>Período</VehicleSubtitle>

            <DateContainer>
              <PeriodText>17 Junho 2019</PeriodText>

              <Icon name="arrow-right" size={20} color="#aeaeb3" />

              <PeriodText>22 Junho 2020</PeriodText>
            </DateContainer>
          </PeriodContainer>
        </Vehicle>
        
        <Vehicle>
          <VehicleContainer>
            <VehicleInfoContainer>
              <TextContainer>
                <VehicleSubtitle>Lamborghini</VehicleSubtitle>
                <VehicleTitle>Huracan</VehicleTitle>
              </TextContainer>
              <TextContainer>
                <VehicleSubtitle>Ao dia</VehicleSubtitle>
                <VehiclePrice>R$ 120</VehiclePrice>
              </TextContainer>
            </VehicleInfoContainer>

            <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

            <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
          </VehicleContainer>
          <PeriodContainer>
            <VehicleSubtitle>Período</VehicleSubtitle>

            <DateContainer>
              <PeriodText>17 Junho 2019</PeriodText>

              <Icon name="arrow-right" size={20} color="#aeaeb3" />

              <PeriodText>22 Junho 2020</PeriodText>
            </DateContainer>
          </PeriodContainer>
        </Vehicle>
      </VehiclesContainer>
    </Container>
  );
};

export default UserRentals;

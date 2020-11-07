import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Header,
  TopHeaderContainer,
  HeaderTitle,
  ProfileImage,
  ProfileName,
  InfoSection,
  Rentals,
  InfoTitle,
  InfoDescription,
  FavoriteVehicle,
  FavoriteVehicleHeader,
  Vehicle,
  VehicleInfoContainer,
  TextContainer,
  VehicleSubtitle,
  VehicleTitle,
  VehiclePrice,
  VehicleImage,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <TopHeaderContainer>
          <Icon name="edit-3" size={20} color="#aeaeb3"/>

          <HeaderTitle>Perfil</HeaderTitle>

          <Icon name="power" size={20} color="#aeaeb3" />
        </TopHeaderContainer>

        <ProfileImage source={{ uri: 'https://avatars2.githubusercontent.com/u/62844136?s=460&u=2ce225849f7add286add7f6337761715df34e9d6&v=4' }} />
      </Header>

      <ProfileName>Lucas César Ambrogi</ProfileName>

      <InfoSection>
        <Rentals>
          <InfoTitle>Agendamentos feitos</InfoTitle>

          <InfoDescription>05</InfoDescription>
        </Rentals>

        <FavoriteVehicle>
          <FavoriteVehicleHeader>
            <InfoTitle>Carro favorito</InfoTitle>

            <InfoDescription>Utilizado 2 vezes</InfoDescription>
          </FavoriteVehicleHeader>
          
          <Vehicle>
            <VehicleInfoContainer>
              <TextContainer>
                <VehicleSubtitle>Lamborghini</VehicleSubtitle>
                <VehicleTitle>Huracan</VehicleTitle>
              </TextContainer>
              <TextContainer>
                <VehicleSubtitle>Por 3 dias</VehicleSubtitle>
                <VehiclePrice>R$ 120</VehiclePrice>
              </TextContainer>
            </VehicleInfoContainer>

            <Icon name="droplet" size={20} color="#aeaeb3" style={{ alignSelf: 'flex-end' }} />

            <VehicleImage source={{ uri: 'https://somarautomoveis.com/wp-content/uploads/2019/11/carro-png-destaque.png' }} />
          </Vehicle>
        </FavoriteVehicle>
      </InfoSection>
    </Container>
  );
};

export default Profile;

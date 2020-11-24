import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';

import Icon from 'react-native-vector-icons/Feather';
import HorizontalVehicleComponent from '../../../components/HorizontalVehicleComponent';

import { 
  Container,
  Header,
  TopHeaderContainer,
  HeaderTitle,
  IconButton,
  ProfileImage,
  ProfileName,
  InfoSection,
  Rentals,
  InfoTitle,
  InfoDescription,
  FavoriteVehicle,
  FavoriteVehicleHeader,
} from './styles';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  plate: string;
  daily_price: number;
  fuel: string;
  gear: string;
  images: {
    id: string;
    image_url: string;
  }[];
}

interface Profile {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_rentals: number;
}

interface FavoriteVehicle {
  vehicle: Vehicle;
  times_used: number;
}

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [favoriteVehicle, setFavoriteVehicle] = useState<FavoriteVehicle>();

  useEffect(() => {
    api.get('profile').then(response => {
      const profile = response.data.user;
      const favorite_vehicle = response.data.favorite_vehicle;

      setProfile(profile);

      if (favorite_vehicle) {
        setFavoriteVehicle(favorite_vehicle);
      }
    });
  }, []);

  const handleEditProfile = useCallback(() => {
    navigate('EditProfile', { profile });
  }, [profile]);

  const handleSignOut = useCallback(() => {
    navigate('ConfirmLogout');
  }, []);

  return (
    <Container>
      <Header>
        <TopHeaderContainer>
          <IconButton onPress={handleEditProfile}>
            <Icon name="edit-3" size={20} color="#aeaeb3"/>
          </IconButton>

          <HeaderTitle>Perfil</HeaderTitle>

          <IconButton onPress={handleSignOut}>
            <Icon name="power" size={20} color="#aeaeb3" />
          </IconButton>
        </TopHeaderContainer>

        <ProfileImage source={{ uri: profile.image_url }} />
      </Header>

      <ProfileName>{profile.name}</ProfileName>

      <InfoSection>
        <Rentals>
          <InfoTitle>Agendamentos feitos</InfoTitle>

          <InfoDescription>{profile.total_rentals}</InfoDescription>
        </Rentals>

        <FavoriteVehicle>
          <FavoriteVehicleHeader>
            <InfoTitle>Carro favorito</InfoTitle>

            <InfoDescription>
              { favoriteVehicle ? `Utilizado ${favoriteVehicle.times_used} vezes` : `Nenhum` }
            </InfoDescription>
          </FavoriteVehicleHeader>
          
          { favoriteVehicle && (
            <HorizontalVehicleComponent 
              vehicle={favoriteVehicle.vehicle} 
              onlyDetails 
            />
          )}
        </FavoriteVehicle>
      </InfoSection>
    </Container>
  );
};

export default Profile;
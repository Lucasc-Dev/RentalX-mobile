import React, { useCallback } from 'react';
import { useAuth } from '../../../hooks/AuthContext';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../../assets/images/Union.png';
import doneIcon from '../../../assets/icons/LogoutDone.png';

import { 
  Container,
  ImageBackground,
  DoneImage,
  TitleContainer,
  Title,
  Subtitle,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

const ConfirmLogout: React.FC = () => {
  const { signOut } = useAuth();
  const { goBack } = useNavigation();

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      <ImageBackground source={backgroundImage} resizeMode="cover" />
      <DoneImage source={doneIcon} />
      <TitleContainer>
        <Title>Sair do RENTAL X</Title>

        <Subtitle>Tem certeza que deseja fazer isso?</Subtitle>
      </TitleContainer>

      <ButtonsContainer>
        <Button onPress={handleGoBack} >
          <ButtonText>Não</ButtonText>
        </Button>
        <Button onPress={handleSignOut} style={{ backgroundColor: '#dc1637' }} >
          <ButtonText>Sim</ButtonText>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default ConfirmLogout;

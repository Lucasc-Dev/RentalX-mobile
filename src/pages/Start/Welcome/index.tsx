import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/images/XLogo.png';

import { 
  Container, 
  VerticalContainer,
  Logo, 
  TitleContainer,
  Title, 
  Subtitle,
  ButtonsContainer,
  HorizontalButtonsContainer,
  Button,
  ButtonText,
  BackButton,
  BackButtonText,
} from './styles';

const WelcomePage: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const handleLoginButton = useCallback(() => {
    navigate('SignIn');
  }, []);
  
  const handleSignUpButton = useCallback(() => {
    navigate('CreateAccount');
  }, []);
  
  const handleBackButton = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      <VerticalContainer>
        <Logo source={logo} />

        <TitleContainer>
          <Title>Seja</Title>
          <Title>Bem-Vindo</Title>

          <Subtitle>O que você deseja fazer?</Subtitle>
        </TitleContainer>

        <ButtonsContainer>
          <HorizontalButtonsContainer>
            <Button 
              style={{ backgroundColor: '#dc1637' }}
              onPress={handleLoginButton}
            >
              <ButtonText>Login</ButtonText>
            </Button>

            <Button 
              style={{ backgroundColor: '#29292e' }}
              onPress={handleSignUpButton}
            >
              <ButtonText>Cadastro</ButtonText>
            </Button>
          </HorizontalButtonsContainer>

          <BackButton onPress={handleBackButton}>
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
        </ButtonsContainer>
      </VerticalContainer>
    </Container>
  );
};

export default WelcomePage;

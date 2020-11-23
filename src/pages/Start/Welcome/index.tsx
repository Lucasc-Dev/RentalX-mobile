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
} from './styles';

const WelcomePage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleLoginButton = useCallback(() => {
    navigate('SignIn');
  }, []);
  
  const handleSignUpButton = useCallback(() => {
    navigate('CreateAccount');
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
        </ButtonsContainer>
      </VerticalContainer>
    </Container>
  );
};

export default WelcomePage;

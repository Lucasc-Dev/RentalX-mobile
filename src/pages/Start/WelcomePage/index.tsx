import React from 'react';

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
            <Button style={{ backgroundColor: '#dc1637' }}>
              <ButtonText>Login</ButtonText>
            </Button>

            <Button style={{ backgroundColor: '#29292e' }}>
              <ButtonText>Cadastro</ButtonText>
            </Button>
          </HorizontalButtonsContainer>

          <BackButton>
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
        </ButtonsContainer>
      </VerticalContainer>
    </Container>
  );
};

export default WelcomePage;

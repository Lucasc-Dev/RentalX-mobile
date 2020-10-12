import React from 'react';

import Icon from 'react-native-vector-icons/Feather'

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { 
  Container,
  BackButton,
  TitleContainer,
  Title,
  Subtitle,
  InputsContainer,
  InfoTitle,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <BackButton>
        <Icon size={20} name="chevron-left" color="#AEAEB3" />
      </BackButton>
      <Container behavior="position">
        <TitleContainer>
          <Title>Crie sua conta</Title>
          
          <Subtitle>Faça seu cadastro de forma rápida e fácil.</Subtitle>
        </TitleContainer>

        <InputsContainer>
          <InfoTitle>1. Dados</InfoTitle>

          <Input 
            name="name"
            placeholder="Nome"
            autoCorrect={false}
            icon="user"
          />
          <Input
            name="email"
            placeholder="E-mail"
            autoCorrect={false}
            icon="mail"
          />

          <Button 
            style={{ marginTop: 32 }}
            text="Próximo"
            onPress={() => {}}
          />
        </InputsContainer>
      </Container>
    </>
  );
};

export default SignIn;

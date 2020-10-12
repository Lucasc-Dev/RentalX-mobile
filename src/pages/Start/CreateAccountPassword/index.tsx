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

const CreateAccountPassword: React.FC = () => {
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
          <InfoTitle>02. Senha</InfoTitle>

          <Input 
            name="password"
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            icon="lock"
          />
          <Input
            name="confirm_password"
            placeholder="Repetir senha"
            autoCorrect={false}
            secureTextEntry
            icon="lock"
          />

          <Button 
            style={{ marginTop: 32 }}
            text="Cadastrar"
            onPress={() => {}}
          />
        </InputsContainer>
      </Container>
    </>
  );
};

export default CreateAccountPassword;

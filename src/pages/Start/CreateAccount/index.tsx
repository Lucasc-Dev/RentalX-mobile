import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather'

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { 
  Container,
  BackButton,
  TextContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from './styles';
import { KeyboardAvoidingView } from 'react-native';

const CreateAccount: React.FC = () => {
  return (
    <>
      <BackButton>
        <Icon size={20} name="chevron-left" color="#AEAEB3" />
      </BackButton>
      <Container>
        <TextContainer>
          <Title>Estamos quase lá.</Title>
          
          <Subtitle>Faça seu login para começar uma experiência incrível.</Subtitle>
        </TextContainer>

        <ButtonsContainer>
          <Input
            placeholder="E-mail"
          />
          <Input 
            placeholder="Senha"
          />

          <Button 
            text="Login"
          />
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default CreateAccount;

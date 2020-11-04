import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'; 
import { FormHandles } from '@unform/core';

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

interface SubmitFormData {
  name: string;
  email: string;
}

const CreateAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleNextButton = useCallback(({ name, email }: SubmitFormData) => {
    navigate('CreateAccountPassword', { name, email });
  }, []);

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
        
        <Form ref={formRef} onSubmit={handleNextButton} >
          <InputsContainer>
            <InfoTitle>01. Dados</InfoTitle>

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
              onPress={() => {formRef.current?.submitForm()}}
            />
          </InputsContainer>
        </Form>
      </Container>
    </>
  );
};

export default CreateAccount;

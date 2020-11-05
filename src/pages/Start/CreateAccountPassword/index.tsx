import React, { useCallback, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';
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

interface CreateAccountRouteParams {
  name: string;
  email: string;
}

const CreateAccountPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const { name, email } = params as CreateAccountRouteParams;

  const handleSubmitButton = useCallback(async (data) => {
    try {
      const user = {
        name, 
        email,
        password: data.password,
      }

      await api.post('users', user);

      navigate('AccountCreated');
    }catch (err) {
      console.log(err);
    }
  }, [name, email]);

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

        <Form ref={formRef} onSubmit={handleSubmitButton} >
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
              onPress={() => {formRef.current?.submitForm()}}
            />
          </InputsContainer>
        </Form>
      </Container>
    </>
  );
};

export default CreateAccountPassword;

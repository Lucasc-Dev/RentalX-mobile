import React, { useCallback, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

import api from '../../../services/api';
import Icon from 'react-native-vector-icons/Feather'

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { 
  Container,
  KeyboardAvoidingContainer,
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
  const { reset, goBack } = useNavigation();
  const { params } = useRoute();

  const formRef = useRef<FormHandles>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);
  
  const { name, email } = params as CreateAccountRouteParams;

  const handleSubmitButton = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória').max(30, 'Máximo 30 dígitos').min(5, 'Mínimo 6 dígitos'),
        confirm_password: Yup.string().required('Senha obrigatória').oneOf([Yup.ref('password'), '']),
      });

      await schema.validate(data, { abortEarly: false });

      const user = {
        name, 
        email,
        password: data.password,
      }

      await api.post('users', user);

      reset({
        index: 0,
        routes: [
          { name: 'AccountCreated' },
        ]
      });
    }catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na autenticação', 
        'Ocorreu um erro ao fazer login, cheque as credenciais.'
      );
    }
  }, [name, email]);

  return (
    <Container>
      <KeyboardAvoidingContainer behavior="position">
        <BackButton onPress={goBack}>
          <Icon size={20} name="chevron-left" color="#AEAEB3" />
        </BackButton>
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
              isPassword={true}
              autoCapitalize="none"
              icon="lock"
              returnKeyType="next"
              onSubmitEditing={() => {
                confirmPasswordInputRef.current?.focus();
              }}
              />
            <Input
              ref={confirmPasswordInputRef}
              name="confirm_password"
              placeholder="Repetir senha"
              autoCorrect={false}
              isPassword={true}
              autoCapitalize="none"
              icon="lock"
              returnKeyType="send"
              textContentType="newPassword"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </InputsContainer>
        </Form>
      </KeyboardAvoidingContainer>
      <Button 
        style={{ marginVertical: 24 }}
        text="Cadastrar"
        onPress={() => {
          formRef.current?.submitForm()
        }}
      />
    </Container>
  );
};

export default CreateAccountPassword;

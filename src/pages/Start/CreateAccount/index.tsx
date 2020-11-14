import React, { useCallback, useRef } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

interface SubmitFormData {
  name: string;
  email: string;
}

const CreateAccount: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const handleNextButton = useCallback(async (data: SubmitFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
      });

      await schema.validate(data, { abortEarly: false });

      navigate('CreateAccountPassword', data);
    }catch(err) {
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
  }, []);

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
        
        <Form ref={formRef} onSubmit={handleNextButton} >
          <InputsContainer>
            <View>
              <InfoTitle>01. Dados</InfoTitle>

              <Input 
                name="name"
                placeholder="Nome"
                autoCorrect={false}
                icon="user"
                returnKeyType="next"
                autoCapitalize="words"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
                />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                placeholder="E-mail"
                icon="mail"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />
            </View>
          </InputsContainer>
        </Form>
      </KeyboardAvoidingContainer>
      <Button 
        style={{ marginVertical: 24 }}
        text="Próximo"
        onPress={() => {
          formRef.current?.submitForm()
        }}
      />
    </Container>
  );
};

export default CreateAccount;

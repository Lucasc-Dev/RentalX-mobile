import React, { useCallback, useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/AuthContext';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

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
  ButtonsContainer,
  HorizontalContainer,
  CheckBox,
  CheckBoxContainer,
  MiniText,
  ForgotPasswordButton,
} from './styles';

interface SubmitFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { signIn, user } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [remindMe, setRemindMe] = useState(true);

  const handleSubmitButton = useCallback(async (data: SubmitFormData) => {
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        password: data.password,
      }, remindMe);
      
      navigate('SelectPeriod');
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
  }, [signIn, navigate, user]);

  return (
    <Container>
      <KeyboardAvoidingContainer behavior="position">
        <BackButton onPress={goBack}>
          <Icon size={20} name="chevron-left" color="#AEAEB3" />
        </BackButton>
        <TitleContainer>
          <Title>Estamos quase lá.</Title>
          
          <Subtitle>Faça seu login para começar uma experiência incrível.</Subtitle>
        </TitleContainer>

        <Form ref={formRef} onSubmit={ handleSubmitButton }>
          <ButtonsContainer>
            <Input
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              name="email"
              placeholder="E-mail"
              icon="mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input 
              ref={passwordInputRef}
              name="password"
              placeholder="Senha"
              autoCapitalize="none"
              isPassword={true}
              autoCorrect={false}
              icon="lock"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm()
              }}
            />

            <HorizontalContainer>
              <CheckBoxContainer>
                <CheckBox
                  value={remindMe}
                  onValueChange={(value) => setRemindMe(value)}
                />

                <MiniText>Lembrar-me</MiniText>
              </CheckBoxContainer>
              

              <ForgotPasswordButton>
                <MiniText>Esqueci minha senha</MiniText>
              </ForgotPasswordButton>
            </HorizontalContainer>
          </ButtonsContainer>
        </Form>
        <Button 
          style={{ marginBottom: 24 }}
          text="Login"
          onPress={() => {
            formRef.current?.submitForm()
          }}
        />
      </KeyboardAvoidingContainer>
    </Container>
  );
};

export default SignIn;

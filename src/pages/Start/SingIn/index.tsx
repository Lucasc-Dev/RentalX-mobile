import React, { useCallback, useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/AuthContext';
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
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const [remindMe, setRemindMe] = useState(false);

  const handleSubmitButton = useCallback(async (data: SubmitFormData) => {
    try{
      await signIn({
        email: data.email,
        password: data.password,
      });
      
      navigate('SelectPeriod');
    }catch (err) {
      Alert.alert('Houve um problema ao fazer login.');
    }
  }, [signIn, navigate, user]);

  return (
    <>
      <BackButton>
        <Icon size={20} name="chevron-left" color="#AEAEB3" />
      </BackButton>
      <Container behavior="position">
        <TitleContainer>
          <Title>Estamos quase lá.</Title>
          
          <Subtitle>Faça seu login para começar uma experiência incrível.</Subtitle>
        </TitleContainer>

        <Form ref={formRef} onSubmit={ handleSubmitButton }>
          <ButtonsContainer>
            <Input
              name="email"
              placeholder="E-mail"
              autoCorrect={false}
              icon="mail"
            />
            <Input 
              name="password"
              placeholder="Senha"
              secureTextEntry
              autoCorrect={false}
              icon="lock"
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

            <Button 
              text="Login"
              onPress={() => formRef.current?.submitForm()}
            />
          </ButtonsContainer>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;

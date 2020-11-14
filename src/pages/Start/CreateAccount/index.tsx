import React, { useCallback, useRef } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'; 
import { FormHandles } from '@unform/core';

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

  const handleNextButton = useCallback(({ name, email }: SubmitFormData) => {
    navigate('CreateAccountPassword', { name, email });
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

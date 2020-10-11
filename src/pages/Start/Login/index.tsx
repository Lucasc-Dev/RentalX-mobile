import React, { useState } from 'react';

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
import { KeyboardAvoidingView } from 'react-native';

const CreateAccount: React.FC = () => {
  const [remindMe, setRemindMe] = useState(false);

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

        <ButtonsContainer>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            icon="mail"
          />
          <Input 
            placeholder="Senha"
            placeholderTextColor="#AEAEB3"
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
          />
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default CreateAccount;

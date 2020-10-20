import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const [remindMe, setRemindMe] = useState(false);

  const handleLoginButton = useCallback(() => {
    navigate('SelectPeriod');
  }, []);

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
            onPress={handleLoginButton}
          />
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default SignIn;

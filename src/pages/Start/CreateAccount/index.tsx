import React, { useCallback } from 'react';
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
  InputsContainer,
  InfoTitle,
} from './styles';

const CreateAccount: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNextButton = useCallback(() => {
    navigate('CreateAccountPassword');
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
            onPress={handleNextButton}
          />
        </InputsContainer>
      </Container>
    </>
  );
};

export default CreateAccount;

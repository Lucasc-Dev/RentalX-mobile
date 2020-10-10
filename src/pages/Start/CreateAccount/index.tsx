import React from 'react';

import Icon from 'react-native-vector-icons/Feather'

import Input from '../../../components/Input';

import { 
  Container,
  BackButton,
  TextContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from './styles';

const CreateAccount: React.FC = () => {
  return (
    <Container>
      <BackButton>
        <Icon size={20} name="chevron-left" color="#AEAEB3" />
      </BackButton>

      <TextContainer>
        <Title>Estamos quase lá.</Title>
        
        <Subtitle>Faça seu login para começar uma experiência incrível.</Subtitle>
      </TextContainer>

      <ButtonsContainer>
        <Input 
          placeholder="E-mail"
          />
        <Input 
          placeholder="Senha"
        />
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAccount;

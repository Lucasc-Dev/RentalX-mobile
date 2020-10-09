import React from 'react';

import Icon from 'react-native-vector-icons/Feather'

//import Input from '../../../components/Input';

import { 
  Container,
  TextContainer,
  Title,
  Subtitle,
  ButtonsContainer,
} from './styles';

const CreateAccount: React.FC = () => {
  return (
    <Container>
      <Icon size={20} name="chevron-left" color="#AEAEB3" />

      <TextContainer>
        <Title>Estamos quase lá.</Title>
        
        <Subtitle>Faça seu login para começar uma experiência incrível.</Subtitle>
      </TextContainer>

      <ButtonsContainer>
        {/* <Input /> */}
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAccount;

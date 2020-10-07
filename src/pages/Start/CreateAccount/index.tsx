import React from 'react';

import Icon from 'react-native-vector-icons/Feather'

import { 
  Container,
  HorizontalContainer, 
} from './styles';

const CreateAccount: React.FC = () => {
  return (
    <Container>
      <HorizontalContainer>
        <Icon name="chevron-left" />
      </HorizontalContainer>
    </Container>
  );
};

export default CreateAccount;

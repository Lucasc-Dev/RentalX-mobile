import React from 'react';

import { 
  Container,
  TitleContainer,
  Title,
  Subtitle,
  Button,
  ButtonText,
} from './styles';

const AccountCreated: React.FC = () => {
  return (
    <Container>
        <TitleContainer>
          <Title>Conta criada!</Title>

          <Subtitle>Agora é só fazer login e aproveitar.</Subtitle>
        </TitleContainer>

        <Button>
          <ButtonText>Pronto</ButtonText>
        </Button>
    </Container>
  );
};

export default AccountCreated;

import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import done from '../../../assets/icons/Done.png'
import background from '../../../assets/images/Union.png'

import { 
  Container,
  ImageBackground,
  DoneImage,
  TitleContainer,
  Title,
  Subtitle,
  Button,
  ButtonText,
} from './styles';

const AccountCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleButton = useCallback(() => {
    reset({
      index: 0,
      routes: [
        { name: 'WelcomePage' },
      ]
    });
  }, []);

  return (
    <Container>
      <ImageBackground source={background} resizeMode="cover" />
        <DoneImage source={done} />
        <TitleContainer>
          <Title>Conta criada!</Title>

          <Subtitle>Agora é só fazer login e aproveitar.</Subtitle>
        </TitleContainer>

        <Button onPress={handleButton}>
          <ButtonText>Pronto</ButtonText>
        </Button>
    </Container>
  );
};

export default AccountCreated;

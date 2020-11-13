import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../../assets/images/Union.png';
import doneIcon from '../../../assets/icons/Done.png';

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

const EditProfileSuccessful: React.FC = () => {
  const { navigate } = useNavigation();

  const handleButton = useCallback(() => {
    navigate('TabPagesStack', { screen: 'Profile' });
  }, []);

  return (
    <Container>
      <ImageBackground source={backgroundImage} resizeMode="cover" />
      <DoneImage source={doneIcon} />
      <TitleContainer>
        <Title>Feito!</Title>

        <Subtitle>Agora suas informações estão atualizadas.</Subtitle>
      </TitleContainer>

      <Button onPress={handleButton}>
        <ButtonText>Pronto</ButtonText>
      </Button>
    </Container>
  );
};

export default EditProfileSuccessful;

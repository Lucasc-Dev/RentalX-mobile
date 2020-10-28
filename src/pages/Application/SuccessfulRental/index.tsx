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

const SuccessfulRental: React.FC = () => {
  const { reset } = useNavigation();

  const handleButton = useCallback(() => {
    reset({
      index: 0,
      routes: [
        { name: 'VehiclesList' },
      ]
    });
  }, []);

  return (
    <Container>
      <ImageBackground source={backgroundImage} resizeMode="cover" />
      <DoneImage source={doneIcon} />
      <TitleContainer>
        <Title>Carro alugado!</Title>

        <Subtitle>Agora você só precisa ir até a concessionária da RentalX pegar o seu automóvel.</Subtitle>
      </TitleContainer>

      <Button onPress={handleButton}>
        <ButtonText>Pronto</ButtonText>
      </Button>
    </Container>
  );
};

export default SuccessfulRental;

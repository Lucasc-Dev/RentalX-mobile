import React from 'react';

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
  return (
    <Container>
      <ImageBackground source={backgroundImage} resizeMode="cover" />
      <DoneImage source={doneIcon} />
      <TitleContainer>
        <Title>Carro alugado!</Title>

        <Subtitle>Agora você só precisa ir até a concessionária da RentalX pegar o seu automóvel.</Subtitle>
      </TitleContainer>

      <Button>
        <ButtonText>Pronto</ButtonText>
      </Button>
    </Container>
  );
};

export default SuccessfulRental;

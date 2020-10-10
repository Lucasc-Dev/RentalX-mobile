import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { 
  ButtonContainer,
  ButtonText,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

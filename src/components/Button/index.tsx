import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { 
  ButtonContainer,
  ButtonText,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  text?: string;
  enable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, enable = true, ...rest }) => {
  return (
    <ButtonContainer
      enabled={enable}
      enable={enable}
      {...rest}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

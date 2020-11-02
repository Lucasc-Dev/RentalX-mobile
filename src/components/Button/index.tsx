import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { 
  ButtonContainer,
  RectButton,
  ButtonText,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  text?: string;
  enable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, enable = true, ...rest }) => {
  return (
    <ButtonContainer>
      <RectButton
        enabled={enable}
        enable={enable}
        {...rest}
      >
        <ButtonText>{text}</ButtonText>
      </RectButton>
    </ButtonContainer>
  );
};

export default Button;

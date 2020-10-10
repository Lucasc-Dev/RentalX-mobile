import React from 'react';
import { TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  IconBox,
  InputBox,
  InputText,
} from './styles';

interface InputProps extends TextInputProps {
  placeholder?: string;
}

const Input: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <Container>
      <IconBox>
        <Icon name="mail" size={20} color="#7a7a80" />
      </IconBox>

      <InputBox>
        <InputText 
          placeholderTextColor="#aeaeb3"
          placeholder={placeholder}
        />
      </InputBox>
    </Container>
  );
};

export default Input;

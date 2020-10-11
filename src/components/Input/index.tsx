import React from 'react';
import { TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  IconBox,
  InputBox,
  TextInput,
} from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      <IconBox>
        <Icon name={icon} size={20} color="#7a7a80" />
      </IconBox>

      <InputBox>
        <TextInput placeholderTextColor="#AEAEB3" { ...rest } />
      </InputBox>
    </Container>
  );
};

export default Input;

import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  IconBox,
  InputBox,
  TextInput,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ icon, name, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
      });
  }, []);

  return (
    <Container>
      <IconBox>
        <Icon name={icon} size={20} color="#7a7a80" />
      </IconBox>

      <InputBox>
        <TextInput 
          ref={inputElementRef}
          keyboardAppearance="light"
          placeholderTextColor="#666360" 
          onChangeText={(value) => { inputValueRef.current.value = value }}
          {...rest} 
        />
      </InputBox>
    </Container>
  );
};

export default Input;

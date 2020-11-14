import React, { forwardRef, useCallback, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  IconBox,
  InputBox,
  TextInput,
  SpyButton,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  isPassword?: boolean;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { icon, name, isPassword, ...rest }, ref,
) => {
  const inputElementRef = useRef<any>(null);

  const [spy, setSpy] = useState(false);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }))

  const handleSpyButton = useCallback(() => {
    setSpy(state => !state);
  }, []);

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
          secureTextEntry={(isPassword && !spy)}
          onChangeText={(value) => { inputValueRef.current.value = value }}
          {...rest} 
        />
        { isPassword && (
          <SpyButton onPress={handleSpyButton}>
            <Icon name={spy ? `eye` : `eye-off`} size={20} color="#aeaeb3" />
          </SpyButton>
        )}
      </InputBox>
    </Container>
  );
};

export default forwardRef(Input);

import React, { useCallback, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';

import Icon from 'react-native-vector-icons/Feather';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { 
  Container,
  Header,
  TopHeaderContainer,
  HeaderTitle,
  IconButton,
  ProfileImage,
  TabContainer,
  Tab,
  TabText,
  ButtonContainer,
} from './styles';

interface Profile {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

interface ProfileParams {
  profile: Profile;
}

const EditProfile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const { updateUser } = useAuth();
  const { goBack, reset } = useNavigation();
  const { profile } = useRoute().params as ProfileParams;

  const [selectedTab, setSelectedTab] = useState('profile');
  
  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleSubmitForm = useCallback(async (data) => {
    if (selectedTab === 'profile') {
      if (!data.email && !data.name) {
        goBack();
        return;
      }

      try{
        const schema = Yup.object().shape({
          name: data.name ? Yup.string().min(5).max(50) : Yup.string().optional(),
          email: Yup.string().email('Digite um e-mail válido'),
        })

        await schema.validate(data, { abortEarly: false });

        const requestBody = {
          email: data.email ? data.email : profile.email,
          name: data.name ? data.name : profile.name,
        }

        const response = await api.put('profile', requestBody);

        updateUser(response.data);

        reset({
          index: 0,
          routes: [
            { name: 'EditProfileSuccessful' },
          ]
        });
      }catch(err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
  
          return;
        }
        Alert.alert('Não foi possível atualizar seu perfil.');
      }
    }

    if (selectedTab === 'password') {
      if (!data.currentPassword && !data.newPassword && !data.confirmPassword) {
        goBack();
        return;
      }

      try {
        const schema = Yup.object().shape({
          currentPassword: Yup.string().required('Senha antiga obrigatória').max(30, 'Máximo 30 dígitos').min(5, 'Mínimo 6 dígitos'),
          newPassword: Yup.string().required('Nova senha obrigatória').max(30, 'Máximo 30 dígitos').min(5, 'Mínimo 6 dígitos'),
          confirmPassword: Yup.string().required('Confirmação de senha obrigatória').oneOf([Yup.ref('newPassword'), '']),
        })

        await schema.validate(data, { abortEarly: false });

        await api.put('profile', {
          oldPassword: data.currentPassword,
          password: data.newPassword,
        });

        reset({
          index: 0,
          routes: [
            { name: 'EditProfileSuccessful' },
          ]
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
  
          return;
        }
        Alert.alert(
          'Erro ao atualizar senha', 
          'Verifique se os dados informados estão corretos.'
        );
      }
    }
  }, [selectedTab, profile]);

  return (
    <Container>
      <Header>
        <TopHeaderContainer>
          <IconButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={20} color="#aeaeb3"/>
          </IconButton>

          <HeaderTitle>Editar Perfil</HeaderTitle>

          <IconButton />
        </TopHeaderContainer>

        <ProfileImage source={{ uri: profile.image_url }} />
      </Header>

      <TabContainer>
        <Tab 
          selected={selectedTab === 'profile'} 
          onPress={() => setSelectedTab('profile')}
        >
          <TabText selected={selectedTab === 'profile'}>Dados</TabText>
        </Tab>
        <Tab 
          selected={selectedTab === 'password'} 
          onPress={() => setSelectedTab('password')}
        >
          <TabText selected={selectedTab === 'password'}>Trocar senha</TabText>
        </Tab>
      </TabContainer>

      <Form ref={formRef} onSubmit={handleSubmitForm} >
        <Input 
          name="name" 
          placeholder="Nome"
          defaultValue={profile.name}
          icon="user" 
          isVisible={selectedTab === 'profile'}
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current?.focus();
          }}
        />
        <Input 
          ref={emailInputRef}
          name="email"
          placeholder="E-mail"
          defaultValue={profile.email}
          icon="mail"
          isVisible={selectedTab === 'profile'}
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />    
      
        <Input
          name="currentPassword"
          isPassword={true}
          placeholder="Senha atual"
          icon="lock"
          isVisible={selectedTab === 'password'}
          returnKeyType="next"
          onSubmitEditing={() => {
            newPasswordInputRef.current?.focus();
          }}
        />    
        <Input 
          ref={newPasswordInputRef}
          name="newPassword"
          isPassword={true}
          placeholder="Nova senha"
          icon="lock"
          isVisible={selectedTab === 'password'}
          returnKeyType="next"
          onSubmitEditing={() => {
            confirmPasswordInputRef.current?.focus();
          }}
        />    
        <Input 
          ref={confirmPasswordInputRef}
          name="confirmPassword"
          isPassword={true}
          placeholder="Confirmar senha"
          icon="lock"
          isVisible={selectedTab === 'password'}
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />  
      </Form>

      <ButtonContainer>
        <Button 
          text="Salvar alterações"
          onPress={() => formRef.current?.submitForm()}
        />
      </ButtonContainer>
    </Container>
  );
};

export default EditProfile;

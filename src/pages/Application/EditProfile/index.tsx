import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';

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
  image: string;
}

interface ProfileParams {
  profile: Profile;
}

const EditProfile: React.FC = () => {
  const profileFormRef = useRef<FormHandles>(null);
  const passwordFormRef = useRef<FormHandles>(null);
  const { updateUser } = useAuth();
  const { goBack, reset } = useNavigation();
  const { profile } = useRoute().params as ProfileParams;

  const [selectedTab, setSelectedTab] = useState('profile');
  
  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleSubmitButton = useCallback(() => {
    if (selectedTab === 'profile') {
      profileFormRef.current?.submitForm();
    } else {
      passwordFormRef.current?.submitForm();
    }
  }, [passwordFormRef, profileFormRef, selectedTab]);

  const handleSubmitForm = useCallback(async (data) => {
    console.log(data)
    if (selectedTab === 'profile') {
      if (!data.email && !data.name || data.email === '' && data.name === '') {
        goBack();

        return;
      }
      try{
        const requestBody = {
          email: data.email ? data.email : profile.email,
          name: data.name ? data.name : profile.name,
        }

        const response = await api.put('profile', requestBody);

        const user = response.data;

        updateUser(user);

        reset({
          index: 0,
          routes: [
            { name: 'EditProfileSuccessful' },
          ]
        });
      }catch(err) {
        Alert.alert('Houve um problema ao atualizar o perfil');
      }
    }
    if (selectedTab === 'password') {
      if (!data.currentPassword && !data.newPassword && !data.confirmPassword) {
        goBack();

        return;
      }

      if (data.currentPassword && data.newPassword && data.confirmPassword) {
        if (data.newPassword !== data.confirmPassword) {
          Alert.alert('A nova senha não condiz com a confirmação.')
        }

        try {
          const requestBody = { 
            name: profile.name,
            email: profile.email,
            oldPassword: data.currentPassword,
            password: data.newPassword,
          }
  
          await api.put('profile', requestBody);
  
          Alert.alert('Senha alterada com sucesso!')
  
          reset({
            index: 0,
            routes: [
              { name: 'EditProfileSuccessful' },
            ]
          });
        } catch (err) {
          Alert.alert('Houve um erro ao atualizar a senha.')
        }
      }else { 
        Alert.alert('Preencha todos os campos.')
      }
    }
  }, [selectedTab, profile, passwordFormRef, profileFormRef]);

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

        <ProfileImage source={{ uri: profile.image }} />
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

      <Form ref={profileFormRef} onSubmit={handleSubmitForm} >
        <Input 
          name="name" 
          placeholder="Nome"
          defaultValue={profile.name}
          icon="user" 
          isVisible={selectedTab === 'profile'}
        />
        <Input 
          name="email"
          placeholder="E-mail"
          defaultValue={profile.email}
          icon="mail"
          isVisible={selectedTab === 'profile'}
        />    
      
        <Input
          name="currentPassword"
          isPassword={true}
          placeholder="Senha atual"
          icon="lock"
          isVisible={selectedTab === 'password'}
          />    
        <Input 
          name="newPassword"
          isPassword={true}
          placeholder="Nova senha"
          icon="lock"
          isVisible={selectedTab === 'password'}
          />    
        <Input 
          name="confirmPassword"
          isPassword={true}
          secureTextEntry
          placeholder="Confirmar senha"
          icon="lock"
          isVisible={selectedTab === 'password'}
        />  
      </Form>

      <ButtonContainer>
        <Button 
          text="Salvar alterações"
          onPress={handleSubmitButton}
        />
      </ButtonContainer>
    </Container>
  );
};

export default EditProfile;

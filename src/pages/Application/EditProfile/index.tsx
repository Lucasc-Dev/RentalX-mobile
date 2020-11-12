import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
  InputContainer,
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
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useNavigation();
  const { profile } = useRoute().params as ProfileParams;

  const [selectedTab, setSelectedTab] = useState('profile');
  
  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleSubmitForm = useCallback(() => {

  }, []);

  return (
    <Container>
      <Header>
        <TopHeaderContainer>
          <IconButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={20} color="#aeaeb3"/>
          </IconButton>

          <HeaderTitle>Editar Perfil</HeaderTitle>

          <View />
        </TopHeaderContainer>

        <ProfileImage source={{ uri: profile.image }} />
      </Header>

      <TabContainer>
        <Tab selected={selectedTab === 'profile'} >
          <TabText selected={selectedTab === 'profile'}>Dados</TabText>
        </Tab>
        <Tab selected={selectedTab === 'password'} >
          <TabText selected={selectedTab === 'password'}>Trocar senha</TabText>
        </Tab>
      </TabContainer>

      <Form ref={formRef} onSubmit={handleSubmitForm} >
        {selectedTab === 'profile' ? (
          <InputContainer>
            <Input 
              name="name" 
              placeholder="Nome"
              icon="user" 
            />
            <Input 
              name="email"
              placeholder="E-mail"
              icon="mail"
            />    
          </InputContainer>
        ) : (
          <InputContainer>
            <Input
              name="currentPassword"
              placeholder="Senha atual"
              icon="lock"
            />    
            <Input 
              name="newPassword"
              placeholder="Nova senha"
              icon="lock"
            />    
            <Input 
              name="confirmPassword"
              placeholder="Confirmar senha"
              icon="lock"
            />    
          </InputContainer>
        )}
      </Form>

      <ButtonContainer>
        <Button 
          text="Salvar alterações"
          onPress={() => {formRef.current?.submitForm()}}
        />
      </ButtonContainer>
    </Container>
  );
};

export default EditProfile;

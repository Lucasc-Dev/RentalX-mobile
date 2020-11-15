import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import OnBoarding from 'react-native-onboarding-swiper';

const OnBoardingScreen: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    MaterialIcon.loadFont();
  }, []);

  const handleDoneButton = useCallback(async () => {
    await AsyncStorage.setItem('@RentalX:firstLaunch', 'true');

    navigate('WelcomePage');
  }, []);

  return (
    <OnBoarding 
      onDone={handleDoneButton}
      bottomBarColor="#FFF"
      bottomBarHeight={80}
      nextLabel={(
        <Icon name="chevron-right" size={20} color="#aeaeb3" />
      )}
      DoneButtonComponent={({...props}) => (
        <TouchableOpacity {...props} >
          <Icon name="chevron-right" size={20} color="#aeaeb3" style={{ marginHorizontal: 20 }} />
        </TouchableOpacity>
      )}
      showSkip={false}
      containerStyles={{
        paddingLeft: 32,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
      imageContainerStyles={{
        paddingTop: 0,
        paddingBottom: 80,
        paddingLeft: 8,
        alignItems: 'flex-start',
      }}
      titleStyles={{
        width: 200,
        paddingBottom: 24,
        fontFamily: 'Archivo-Bold',
        fontSize: 40,
        lineHeight: 42,
        color: '#47474d',
        textAlign: 'left',
      }}
      subTitleStyles={{
        width: 210,
        paddingBottom: 24,
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        lineHeight: 25,
        color: '#7A7A80',
        textAlign: 'left'
      }}
      pages={[
        {
          backgroundColor: '#FFF',
          image: <Icon name="calendar" size={70} color="#dc1637" />,
          title: 'Primeiro, escolha a data',
          subtitle: 'Você é quem define um período, e nós, mostraremos os carros disponíveis.',
        },
        {
          backgroundColor: '#FFF',
          image: <MaterialIcon name="directions-car" size={70} color="#dc1637" />,
          title: 'Depois, escolha o carro',
          subtitle: 'Vários modelos para você dirigir seguro, com conforto, e segurança.',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

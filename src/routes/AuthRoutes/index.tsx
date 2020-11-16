import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../../pages/Start/Welcome';
import SignIn from '../../pages/Start/SingIn';
import CreateAccount from '../../pages/Start/CreateAccount';
import CreateAccountPassword from '../../pages/Start/CreateAccountPassword';
import AccountCreated from '../../pages/Start/AccountCreated';
import OnBoardingScreen from '../../pages/Start/OnBoardingScreen';
import SplashScreen from 'react-native-splash-screen';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => {
    const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);

    useEffect(() => {
        async function checkFirstLaunch() {
            const response = await AsyncStorage.getItem('@RentalX:firstLaunch');

            if (response === null) {
                setFirstLaunch(true);
            }else {
                setFirstLaunch(false);
            }

            SplashScreen.hide();
        }

        checkFirstLaunch();
    }, []);

    return (
        <App.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#E1E1E6' },
            }}
        >
            {firstLaunch && (
                <App.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            )}
            <App.Screen name="WelcomePage" component={WelcomePage} />
            <App.Screen name="SignIn" component={SignIn} />
            <App.Screen name="CreateAccount" component={CreateAccount} />
            <App.Screen name="CreateAccountPassword" component={CreateAccountPassword} />
            <App.Screen name="AccountCreated" component={AccountCreated} />
        </App.Navigator>
    );
}

export default AuthRoutes;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../pages/Start/Welcome';
import SignIn from '../pages/Start/SingIn';
import CreateAccount from '../pages/Start/CreateAccount';
import CreateAccountPassword from '../pages/Start/CreateAccountPassword';
import AccountCreated from '../pages/Start/AccountCreated';
import SelectPeriod from '../pages/Application/SelectPeriod';
import VehiclesList from '../pages/Application/VehiclesList';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Auth.Navigator 
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#E1E1E6' },
            }}
        >
            <Auth.Screen name="WelcomePage" component={WelcomePage} />
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="CreateAccount" component={CreateAccount} />
            <Auth.Screen name="CreateAccountPassword" component={CreateAccountPassword} />
            <Auth.Screen name="AccountCreated" component={AccountCreated} />
            
            <Auth.Screen name="SelectPeriod" component={SelectPeriod} />
            <Auth.Screen name="VehiclesList" component={VehiclesList} />
        </Auth.Navigator>
    );
}

export default AuthRoutes;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../pages/Start/Welcome';
import SignIn from '../pages/Start/SingIn';
import CreateAccount from '../pages/Start/CreateAccount';

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
        </Auth.Navigator>
    );
}

export default AuthRoutes;
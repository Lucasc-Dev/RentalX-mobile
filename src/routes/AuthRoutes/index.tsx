import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../../pages/Start/Welcome';
import SignIn from '../../pages/Start/SingIn';
import CreateAccount from '../../pages/Start/CreateAccount';
import CreateAccountPassword from '../../pages/Start/CreateAccountPassword';
import AccountCreated from '../../pages/Start/AccountCreated';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <App.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#E1E1E6' },
            }}
        >
            <App.Screen name="WelcomePage" component={WelcomePage} />
            <App.Screen name="SignIn" component={SignIn} />
            <App.Screen name="CreateAccount" component={CreateAccount} />
            <App.Screen name="CreateAccountPassword" component={CreateAccountPassword} />
            <App.Screen name="AccountCreated" component={AccountCreated} />
        </App.Navigator>
    );
}

export default AuthRoutes;
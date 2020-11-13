import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabPagesStack from './TabPagesStack';

import SelectPeriod from '../../pages/Application/SelectPeriod';
import VehicleDetails from '../../pages/Application/VehicleDetails';
import SuccessfulRental from '../../pages/Application/SuccessfulRental';
import EditProfile from '../../pages/Application/EditProfile';
import EditProfileSuccessful from '../../pages/Application/EditProfileSuccessful';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <App.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#E1E1E6' },
            }}
        >
            <App.Screen name="SelectPeriod" component={SelectPeriod} />
            <App.Screen name="TabPagesStack" component={TabPagesStack} />
            <App.Screen name="VehicleDetails" component={VehicleDetails} />
            <App.Screen name="SuccessfulRental" component={SuccessfulRental} />
            <App.Screen name="EditProfile" component={EditProfile} />
            <App.Screen name="EditProfileSuccessful" component={EditProfileSuccessful} />
        </App.Navigator>
    );
}

export default AuthRoutes;
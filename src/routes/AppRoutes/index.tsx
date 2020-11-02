import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SelectPeriod from '../../pages/Application/SelectPeriod';
import VehiclesList from '../../pages/Application/VehiclesList';
import SearchVehicle from '../../pages/Application/SearchVehicle';
import UserRentals from '../../pages/Application/UserRentals';
import VehicleDetails from '../../pages/Application/VehicleDetails';
import SuccessfulRental from '../../pages/Application/SuccessfulRental';
import Profile from '../../pages/Application/Profile';

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
            <App.Screen name="VehiclesList" component={VehiclesList} />
            <App.Screen name="SearchVehicle" component={SearchVehicle} />
            <App.Screen name="UserRentals" component={UserRentals} />
            <App.Screen name="VehicleDetails" component={VehicleDetails} />
            <App.Screen name="SuccessfulRental" component={SuccessfulRental} />
            <App.Screen name="Profile" component={Profile} />
        </App.Navigator>
    );
}

export default AuthRoutes;
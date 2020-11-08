import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VehiclesList from '../../pages/Application/VehiclesList';
import SearchVehicle from '../../pages/Application/SearchVehicle';
import UserRentals from '../../pages/Application/UserRentals';
import Profile from '../../pages/Application/Profile';

const App = createBottomTabNavigator();

const TabPagesStack: React.FC = () => {
    return (
        <App.Navigator>
            <App.Screen name="VehiclesList" component={VehiclesList} />
            <App.Screen name="SearchVehicle" component={SearchVehicle} />
            <App.Screen name="UserRentals" component={UserRentals} />
            <App.Screen name="Profile" component={Profile} />
        </App.Navigator>
    );
};

export default TabPagesStack;
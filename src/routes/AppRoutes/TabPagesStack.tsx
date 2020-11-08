import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VehiclesList from '../../pages/Application/VehiclesList';
import SearchVehicle from '../../pages/Application/SearchVehicle';
import UserRentals from '../../pages/Application/UserRentals';
import Profile from '../../pages/Application/Profile';

const App = createBottomTabNavigator();

const TabPagesStack: React.FC = () => {
    return (
        <App.Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    height: 56,
                    backgroundColor: '#FFF'
                },
                tabStyle: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                
            }}  
        >
            <App.Screen 
                name="VehiclesList" 
                component={VehiclesList} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="home" size={23} color={focused ? '#DC1637' : '#a0a0b2'} />
                    )
                }}
            />
            <App.Screen 
                name="SearchVehicle" 
                component={SearchVehicle} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="search" size={23} color={focused ? '#DC1637' : '#a0a0b2'} />
                    )
                }}
            />
            <App.Screen 
                name="UserRentals" 
                component={UserRentals} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="calendar" size={23} color={focused ? '#DC1637' : '#a0a0b2'} />
                    )
                }}
            />
            <App.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="user" size={23} color={focused ? '#DC1637' : '#a0a0b2'} />
                    )
                }}
            />
        </App.Navigator>
    );
};

export default TabPagesStack;
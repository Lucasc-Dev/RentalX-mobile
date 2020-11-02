import React from 'react';

import { useAuth } from '../hooks/AuthContext';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes: React.FC = () => {
    const { user } = useAuth();

    return user ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;
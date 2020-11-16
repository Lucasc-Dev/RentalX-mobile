import React from 'react';

import { useAuth } from '../hooks/AuthContext';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading === false) {
        return user ? <AppRoutes/> : <AuthRoutes/>;
    }
    return null;
}

export default Routes;
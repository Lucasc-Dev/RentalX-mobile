import React from 'react';

import { AuthProvider } from './AuthContext';
import { PeriodProvider } from './PeriodContext';

const AppProvider: React.FC = ({ children }) => {
    return (
        <AuthProvider>
            <PeriodProvider>
                { children }
            </PeriodProvider>
        </AuthProvider>
    );
}

export default AppProvider;
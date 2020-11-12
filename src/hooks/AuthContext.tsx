import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    role: string;
}

interface AuthState {
    user: User;
    token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    const signIn = useCallback(async (data: SignInCredentials) => {
        const response = await api.post('sessions', data);

        const { token, user } = response.data;
        
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ user, token });
    }, [api]);

    const signOut = useCallback(() => {
        setData({} as AuthState);
    }, []);

    const updateUser = useCallback((user: User) => {
        setData(state => ({
            token: state.token,
            user,
        }));
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
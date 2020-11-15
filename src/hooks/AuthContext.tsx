import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
    loading: boolean;
    signIn(credentials: SignInCredentials, remeberAccount?: boolean): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const [ user, token ] = await AsyncStorage.multiGet([
                '@RentalX:user',
                '@RentalX:token',
            ]);

            if (user[1] && token[1]) {
                api.defaults.headers.authorization = `Bearer ${token[1]}`;

                setData({ 
                    user: JSON.parse(user[1]),
                    token: token[1] 
                });
            }

            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async (data: SignInCredentials, remeberAccount?: boolean) => {
        const response = await api.post('sessions', data);

        const { token, user } = response.data;
        
        api.defaults.headers.authorization = `Bearer ${token}`;

        if (remeberAccount) {
            await AsyncStorage.multiSet([
                ['@RentalX:token', token],
                ['@RentalX:user', JSON.stringify(user)],
            ]);
        }

        setData({ user, token });
    }, [api]);

    const signOut = useCallback(async () => {
        try{
            await AsyncStorage.multiRemove(['@RentalX:token', '@RentalX:user']);
        }catch {}

        setData({} as AuthState);
    }, []);

    const updateUser = useCallback((user: User) => {
        setData(state => ({
            token: state.token,
            user,
        }));
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut, updateUser }}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
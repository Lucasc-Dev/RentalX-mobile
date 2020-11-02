import React, { createContext, useCallback, useContext, useState } from 'react';

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
    updateUser(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {

    }, []);

    const signOut = useCallback(() => {

    }, []);

    const updateUser = useCallback(() => {

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
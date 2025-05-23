import React, { createContext, useState, useContext } from 'react';

type UserContextType = {
    userName: string;
    setUserName: (name: string) => void;
    city: string;
    setCity: (city: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userName, setUserName] = useState('');
    const [city, setCity] = useState('');

    return (
        <UserContext.Provider value={{ userName, setUserName, city, setCity }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

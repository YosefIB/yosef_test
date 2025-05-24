import React, { createContext, useState, useContext } from 'react';

type UserContextType = {
    userName: string;
    setUserName: (name: string) => void;
    city: string;
    setCity: (city: string) => void;
    maritalStatus: string;
    setMaritalStatus: (status: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userName, setUserName] = useState('');
    const [city, setCity] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    return (
        <UserContext.Provider value={{ userName, setUserName, city, setCity, maritalStatus, setMaritalStatus }}>
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

import React, { useState, createContext, ReactNode, useEffect } from 'react';

type DarkModeContextType = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: false,
    setDarkMode: () => {},
});

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    useEffect(() => {
        const body = document.body;
        body.classList.remove(darkMode ? "light-theme" : "dark-theme");
        body.classList.add(darkMode ? "dark-theme" : "light-theme");
    }, [darkMode]);


    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

'use client'

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(null);

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('EN');

    useEffect(() => {
        const lang = localStorage.getItem('lang') || 'EN';
        setLang(lang);
    }, [])

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangProvider;


export const useLang = () => {
    return useContext(LangContext);
}
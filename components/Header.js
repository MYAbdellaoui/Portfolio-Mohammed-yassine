// components/Header.js
import React from 'react';
import LanguageSwitcher from "./navigation/LanguageSwitcher";
import { FiGlobe } from "react-icons/fi"; // Icône de globe

const Header = () => {
    return (
        <header className="fixed top-0 right-0 p-4 flex items-center gap-2">
            <LanguageSwitcher />
        </header>
    );
};

export default Header;

// components/navigation/LanguageSwitcher.js
import { useRouter } from 'next/router';
import { FiGlobe } from "react-icons/fi";

const LanguageSwitcher = () => {
    const router = useRouter();
    const { locale } = router;

    const switchLanguage = () => {
        const newLocale = locale === 'fr' ? 'en' : 'fr';
        router.push(router.pathname, router.asPath, { locale: newLocale });
    };

    return (
        <FiGlobe
            onClick={switchLanguage}
            className="text-2xl cursor-pointer text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500"
            title={locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
        />
    );
};

export default LanguageSwitcher;

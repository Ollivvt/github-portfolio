import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { zhTW } from '../translations/zh-TW';

const translations = {
  en,
  'zh-TW': zhTW,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, currentLanguage: language };
}; 
import i18n from "i18next";
import {Translation, initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'
import uzTranslation from '../public/local/uz.json'
import ruTranslation from '../public/local/ru.json'
import enTranslation from '../public/local/en.json'
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzTranslation},
        ru:{translation:ruTranslation},
        en:{translation:enTranslation},
    }
})
export default i18n;
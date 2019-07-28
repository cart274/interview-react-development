import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Inicio": "Home",
          "Tecnologías": "Technologies",
          "Beneficios":"Benefits",
          "Requerimientos": "Requirements",
          "Ingresar": "Login",
          "Productos": "Products",
          "Bienvenido a tu ": "Welcome to your",
          "Entrevista Técnica": "Technical Interview",
          "en": "in",
          "Estamos buscando para incorporar gente increíble para estas tecnologías:": "We are looking to incorporate incredible people for these technologies:",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
        }
      }
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });
export default i18n
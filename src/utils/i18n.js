import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      es: {
        translation: {
          "Home": "Inicio",
          "Technologies": "Tecnologías",
          "Benefits":"Beneficios",
          "Requirements": "Requerimientos",
          "Login": "Ingresar",
          "Products": "Productos",
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
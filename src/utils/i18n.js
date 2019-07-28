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
          "Estamos buscando para incorporar gente increíble para estas tecnologías": "We are looking to incorporate incredible people for these technologies",
          "Siguenos": "Follow us",
          "Trabajamos para": "We work to",
          "convertir": "convert",
          "ideas": "ideas",
          "en productos": "into products",
          "Entre los beneficios que ofrecemos se encuentran": "Among the benefits we offer are",
          "Flexibilidad Horaria": "Flexible schedule",
          "Home Office": "Home Office",
          "Capacitaciones y workshops": "Training and workshops",
          "Snacks, frutas y bebidas gratis": "Free snacks, fruits and drinks",
          "Semana Remota": "Remote Week",
          "Trabajar en últimas tecnologías": "Work on latest technologies",
          "Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos": "Advanced or received students of careers in the computer, systems or electronic field",
          "Inglés intermedio/avanzado": "Intermediate/Advanced English",
          "Conocimiento en metodologías ágiles (deseable)": "Knowledge in agile methodologies (desirable)",
          "Gracias por": "Thanks for",
          "completar el ejercicio": "complete the exercise",
          "Te invitamos a ver mas información": "We invite you to see more information",
          "Conocer más": "Learn more",
          "Descripción": "Description",
          "Precio": "Price",
          "Nombre": "Name",
          "Correo": "Email",
          "Apellido": "Lastname",
          "Edad": "Age",
          "Acepto los términos y condiciones": "Accept terms and conditions",
          "Cancelar": "Cancel",
          "Aceptar": "Accept",
          "Seleccione": "Select",
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
// Datos de actividades y preguntas
// Cada actividad tiene exactamente 2 preguntas en este MVP
import { publicImages } from '../assets/images'

export const activities = [
  {
    id: 'correos',
    title: 'Correos sospechosos',
    cover: publicImages.correos,
    questions: [
      {
        id: 'q1',
        type: 'single',
        image: publicImages.correos,
        text: 'Te llegó un correo pidiendo datos de tu banco para “verificación de seguridad”. ¿Qué haces?',
        options: [
          { id: 'a', label: 'Ignorar y reportar como phishing', correct: true },
          { id: 'b', label: 'Responder con mis datos bancarios', correct: false },
          { id: 'c', label: 'Abrir todos los enlaces para comprobar', correct: false },
          { id: 'd', label: 'Reenviar a compañeros para validar', correct: false },
        ],
        explanation: 'Nunca compartas datos sensibles por email. Usa canales oficiales del banco y reporta phishing.'
      },
      {
        id: 'q2',
        type: 'boolean',
        image: publicImages.correos,
        text: 'El dominio del remitente es “mi-banco-seguro.com”. ¿Es confiable?',
        options: [
          { id: 'true', label: 'Sí', correct: false },
          { id: 'false', label: 'No', correct: true },
        ],
        explanation: 'Los atacantes usan dominios parecidos. Verifica siempre el dominio oficial.'
      }
    ]
  },
  {
    id: 'contrasenas',
    title: 'Uso de contraseñas',
    cover: publicImages.contraseñas,
    questions: [
      {
        id: 'q1',
        type: 'single',
        image: publicImages.contraseñas,
        text: '¿Cuál es una buena práctica para crear contraseñas seguras?',
        options: [
          { id: 'a', label: 'Usar la misma en todos los sitios', correct: false },
          { id: 'b', label: 'Frase larga con combinaciones', correct: true },
          { id: 'c', label: 'Fecha de nacimiento', correct: false },
          { id: 'd', label: '123456', correct: false },
        ],
        explanation: 'Una frase larga con letras, números y símbolos mejora la seguridad.'
      },
      {
        id: 'q2',
        type: 'boolean',
        image: publicImages.contraseñas,
        text: '¿Es recomendable activar el 2FA?',
        options: [
          { id: 'true', label: 'Sí', correct: true },
          { id: 'false', label: 'No', correct: false },
        ],
        explanation: 'El segundo factor añade una capa extra de seguridad.'
      }
    ]
  }
]

export function getActivityById(id) {
  return activities.find((a) => a.id === id)
}

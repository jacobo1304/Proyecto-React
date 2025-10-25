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
  image: publicImages.correos1,
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
  image: publicImages.correos2,
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
  image: publicImages.claves1,
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
  image: publicImages.claves2,
        text: '¿Es recomendable activar el 2FA?',
        options: [
          { id: 'true', label: 'Sí', correct: true },
          { id: 'false', label: 'No', correct: false },
        ],
        explanation: 'El segundo factor añade una capa extra de seguridad.'
      }
    ]
  },
  {
    id: 'accidentes',
    title: 'Accidentes laborales',
    cover: publicImages.accidentesLaborales,
    questions: [
      {
        id: 'q1',
        type: 'single',
  image: publicImages.accidentes1,
        text: 'Si ves un derrame en el piso del área de trabajo, ¿qué haces primero?',
        options: [
          { id: 'a', label: 'Ignorarlo y seguir trabajando', correct: false },
          { id: 'b', label: 'Señalizar y reportarlo para limpieza', correct: true },
          { id: 'c', label: 'Esperar a que otro lo limpie', correct: false },
          { id: 'd', label: 'Cubrir con papel', correct: false },
        ],
        explanation: 'Señaliza el peligro y reporta para evitar resbalones y accidentes.'
      },
      {
        id: 'q2',
        type: 'boolean',
  image: publicImages.accidentes2,
        text: '¿Es obligatorio usar EPP en áreas señalizadas?',
        options: [
          { id: 'true', label: 'Sí', correct: true },
          { id: 'false', label: 'No', correct: false },
        ],
        explanation: 'El Equipo de Protección Personal reduce el riesgo de lesiones.'
      }
    ]
  },
  {
    id: 'rutas',
    title: 'Rutas de evacuación',
    cover: publicImages.rutasEvacuacion,
    questions: [
      {
        id: 'q1',
        type: 'single',
  image: publicImages.rutas1,
        text: 'En una evacuación, ¿qué debes hacer?',
        options: [
          { id: 'a', label: 'Correr y empujar para salir rápido', correct: false },
          { id: 'b', label: 'Seguir la ruta señalizada con calma', correct: true },
          { id: 'c', label: 'Volver por objetos personales', correct: false },
          { id: 'd', label: 'Usar el ascensor', correct: false },
        ],
        explanation: 'Sigue las rutas señalizadas, mantén la calma y no uses ascensores.'
      },
      {
        id: 'q2',
        type: 'boolean',
  image: publicImages.rutas2,
        text: '¿Debes reunirte en el punto de encuentro?',
        options: [
          { id: 'true', label: 'Sí', correct: true },
          { id: 'false', label: 'No', correct: false },
        ],
        explanation: 'El punto de encuentro permite verificar que todos estén a salvo.'
      }
    ]
  }
]

export function getActivityById(id) {
  return activities.find((a) => a.id === id)
}

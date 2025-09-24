// Importaciones centralizadas de imágenes
// Todas las imágenes del proyecto organizadas en un solo lugar

// Logos e íconos principales
import trainingLogo from './imgs/traininglogo.png'
import logoTraining from './imgs/logotraining.png'

// Imágenes de actividades y contenido
import confetti from './imgs/confetti.png'
import correos from './imgs/correos.jpg'
import contraseñas from './imgs/contraseñas.png'
import imagen404 from './imgs/imagen404.png'
import riesgosTrabajo from './imgs/riesgosTrabajo.jpg'
import seguridadInformacion from './imgs/seguridadInformacion.jpg'
import toast from './imgs/toast.png'

// URLs de imágenes en public (para referencias directas)
export const publicImages = {
  confetti: '/images/confetti.png',
  contraseñas: '/images/contraseñas.png', 
  contraseñasEncoded: '/images/Contrase%C3%B1as.png',
  correos: '/images/correos.jpg',
  imagen404: '/images/imagen404.png',
  logoTraining: '/images/logotraining.png',
  riesgosTrabajo: '/images/riesgosTrabajo.jpg',
  riesgosTrabajoEncoded: '/images/Riesgos%20del%20trabajo.jpg',
  seguridadInformacion: '/images/seguridadInformacion.jpg',
  seguridadInformacionCaps: '/images/SeguridadInformacion.jpg',
  toast: '/images/toast.png',
  toastSuccess: '/images/toast-success.png',
  trainingProject: '/images/Training Train Proyecto DCU. (3).png'
}

// Exportación de imágenes importadas
export {
  trainingLogo,
  logoTraining,
  confetti,
  correos,
  contraseñas,
  imagen404,
  riesgosTrabajo,
  seguridadInformacion,
  toast
}

// Exportación por defecto con todas las imágenes
export default {
  trainingLogo,
  logoTraining,
  confetti,
  correos,
  contraseñas,
  imagen404,
  riesgosTrabajo,
  seguridadInformacion,
  toast,
  ...publicImages
}
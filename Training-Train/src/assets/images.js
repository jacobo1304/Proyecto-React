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
// Usar BASE_URL de Vite que se configura automáticamente según el entorno
const basePath = import.meta.env.BASE_URL

export const publicImages = {
  confetti: `${basePath}images/Confetti.png`,
  contraseñas: `${basePath}images/contraseñas.png`, 
  contraseñasEncoded: `${basePath}images/Contrase%C3%B1as.png`,
  correos: `${basePath}images/correos.jpg`,
  imagen404: `${basePath}images/imagen404.png`,
  logoTraining: `${basePath}images/logotraining.png`,
  riesgosTrabajo: `${basePath}images/riesgosTrabajo.jpg`,
  riesgosTrabajoEncoded: `${basePath}images/Riesgos%20del%20trabajo.jpg`,
  seguridadInformacion: `${basePath}images/seguridadInformacion.jpg`,
  seguridadInformacionCaps: `${basePath}images/SeguridadInformacion.jpg`,
  toast: `${basePath}images/toast.png`,
  toastSuccess: `${basePath}images/toast-success.png`,
  trainingProject: `${basePath}images/Training Train Proyecto DCU. (3).png`
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
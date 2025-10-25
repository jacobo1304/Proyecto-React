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
  // Variante en minúsculas
  confettiLower: `${basePath}images/confetti.png`,
  contraseñas: `${basePath}images/contraseñas.png`, 
  contraseñasEncoded: `${basePath}images/Contrase%C3%B1as.png`,
  correos: `${basePath}images/correos.jpg`,
  // Variantes adicionales de correos
  correos1: `${basePath}images/Correos1.jpg`,
  correos2: `${basePath}images/Correos2.png`,
  imagen404: `${basePath}images/imagen404.png`,
  logoTraining: `${basePath}images/logotraining.png`,
  riesgosTrabajo: `${basePath}images/riesgosTrabajo.jpg`,
  riesgosTrabajoEncoded: `${basePath}images/Riesgos%20del%20trabajo.jpg`,
  // Recursos de seguridad de la información (dos variantes de nombre)
  accidentesLaborales: `${basePath}images/accidentesLaborales.jpg`,
  rutasEvacuacion: `${basePath}images/rutasEvacuacion.jpg`,
  seguridadInformacion: `${basePath}images/seguridadInformacion.jpg`,
  seguridadInformacionCaps: `${basePath}images/SeguridadInformacion.jpg`,
  toast: `${basePath}images/toast.png`,
  toastSuccess: `${basePath}images/toast-success.png`,
  trainingProject: `${basePath}images/Training Train Proyecto DCU. (3).png`,
  // Adicionales disponibles
  accidentes1: `${basePath}images/accidentes1.jpg`,
  accidentes2: `${basePath}images/accidentes2.jpg`,
  claves1: `${basePath}images/claves1.png`,
  claves2: `${basePath}images/claves2.png`,
  rutas1: `${basePath}images/rutas1.png`,
  rutas2: `${basePath}images/rutas2.jpg`,
  interactividad: `${basePath}images/Interactividad.png`,
  customerLoyalty: `${basePath}images/customerLoyalty.jpeg`,
  landing1: `${basePath}images/landing1.jpg`,
  landing2: `${basePath}images/landing2.jpg`,
  google: `${basePath}images/google.png`,
  microsoft: `${basePath}images/microsoft.jpg`,
  universidad: `${basePath}images/Universidad.jpg`,
  rutadeTren: `${basePath}images/rutadeTren.jpg`,
  mitadTrasera: `${basePath}images/mitadTrasera.png`,
  mitadEnfrente: `${basePath}images/mitadEnfrente.png`,
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
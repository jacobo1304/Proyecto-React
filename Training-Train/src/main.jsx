import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './assets/Pages/login.jsx'
import Inicio from './assets/Pages/inicio.jsx'
import Actividades from './assets/Pages/Actividades.jsx'
import LoadingScreen from './assets/Pages/loadingScreen.jsx'
import Correcto from './assets/Pages/Correcto.jsx'
import Incorrecto from './assets/Pages/Incorrecto.jsx'
import Confirmacion from './assets/Pages/Confirmacion.jsx'
import NotFound from './assets/Pages/NotFound.jsx'
import Perfil from './assets/Pages/perfil.jsx'
import Progreso from './assets/Pages/progreso.jsx'
import Tienda from './assets/Pages/tienda.jsx'
import InfoActividad from './assets/Pages/infoActividad.jsx'
import Actividad from './assets/Pages/Actividad.jsx'
import Resultado from './assets/Pages/Resultado.jsx'
import ToastContainer from './components/ToastContainer.jsx'
import ThemeRoot from './components/ThemeRoot.jsx'
import Opciones from './assets/Pages/Opciones.jsx'
import Terminos from './assets/Pages/Terminos.jsx'

import { useAuthStore } from './store/authStore'

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeRoot>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
    <Route path="/inicio" element={<ProtectedRoute><Inicio /></ProtectedRoute>} />
    <Route path="/actividades" element={<ProtectedRoute><Actividades /></ProtectedRoute>} />
    <Route path="/actividad" element={<ProtectedRoute><Actividad /></ProtectedRoute>} />
    <Route path="/actividad/:id" element={<ProtectedRoute><Actividad /></ProtectedRoute>} />
    <Route path="/info-actividad" element={<ProtectedRoute><InfoActividad /></ProtectedRoute>} />
    <Route path="/info-actividad/:id" element={<ProtectedRoute><InfoActividad /></ProtectedRoute>} />
    <Route path="/perfil" element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
    <Route path="/progreso" element={<ProtectedRoute><Progreso /></ProtectedRoute>} />
    <Route path="/tienda" element={<ProtectedRoute><Tienda /></ProtectedRoute>} />
    <Route path="/resultado" element={<ProtectedRoute><Resultado /></ProtectedRoute>} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/correcto" element={<Correcto />} />
        <Route path="/incorrecto" element={<Incorrecto />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/opciones" element={<Opciones />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeRoot>
  </StrictMode>,
)

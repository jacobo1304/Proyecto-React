import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/Pages/login.jsx'
import Inicio from './assets/Pages/inicio.jsx'
import Actividades from './assets/Pages/Actividades.jsx'
import LoadingScreen from './assets/Pages/loadingScreen.jsx'
import Correcto from './assets/Pages/Correcto.jsx'
import Incorrecto from './assets/Pages/Incorrecto.jsx'
import Confirmacion from './assets/Pages/Confirmacion.jsx'
import NotFound from './assets/Pages/NotFound.jsx'
import Menu from './assets/Pages/Menu.jsx'
import Perfil from './assets/Pages/perfil.jsx'
import Progreso from './assets/Pages/progreso.jsx'
import Tienda from './assets/Pages/tienda.jsx'
import InfoActividad from './assets/Pages/infoActividad.jsx'
import Actividad from './assets/Pages/Actividad.jsx'
import Resultado from './assets/Pages/Resultado.jsx'
import ToastContainer from './components/ToastContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
   
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades />} />
  <Route path="/actividad" element={<Actividad />} />
  <Route path="/actividad/:id" element={<Actividad />} />
  <Route path="/info-actividad" element={<InfoActividad />} />
  <Route path="/info-actividad/:id" element={<InfoActividad />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/progreso" element={<Progreso />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/correcto" element={<Correcto />} />
        <Route path="/incorrecto" element={<Incorrecto />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

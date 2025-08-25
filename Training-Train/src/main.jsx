import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/Pages/login.jsx'
import Inicio from './assets/Pages/inicio.jsx'
import Actividades from './assets/Pages/Actividades.jsx'
import LoadingScreen from './assets/Pages/loadingScreen.jsx'
import Correcto from './assets/Pages/Correcto.jsx'
import Confirmacion from './assets/Pages/Confirmacion.jsx'
import NotFound from './assets/Pages/NotFound.jsx'
import Menu from './assets/Pages/Menu.jsx'
import Perfil from './assets/Pages/perfil.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades />} />
  
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/correcto" element={<Correcto />} />
      <Route path="/confirmacion" element={<Confirmacion />} />
      <Route path="/perfil" element={<Perfil />} />
  <Route path="*" element={<NotFound />} />
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import './App.css'
import { Navigate } from 'react-router-dom'
import LandingPage from './assets/Pages/LandingPage.jsx'
import { useAuthStore } from './store/authStore'

function App() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  
  // Si está autenticado, redirigir al inicio; si no, mostrar la Landing
  if (isAuthenticated) return <Navigate to="/inicio" replace />
  return <LandingPage />
}

export default App

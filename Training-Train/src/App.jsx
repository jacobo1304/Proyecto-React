import './App.css'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'

function App() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  
  // Redirigir al login si no está autenticado, o al inicio si ya está autenticado
  return <Navigate to={isAuthenticated ? "/inicio" : "/login"} replace />
}

export default App

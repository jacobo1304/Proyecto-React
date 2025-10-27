import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Nombre del repositorio en GitHub (para rutas correctas en Pages)
  base: '/Training-Train/',
  plugins: [react()],
  build: {
    // Publicación con "Deploy from branch" en GitHub Pages
    // Construimos en ../docs para que Pages sirva /docs de la rama main
    outDir: '../docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SDEV_255_Final_Project_Group1/',
  build: {
    outDir: 'docs'  // GitHub Pages will serve from here
  }
})
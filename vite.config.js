import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specific port to avoid WebSocket issues
    host: '0.0.0.0', // Allow external connections
  }
})
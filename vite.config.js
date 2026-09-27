import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Vercel: base '/' (full experience)
// GitHub Pages minimal version lives in /docs (pure static, no build needed)
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})

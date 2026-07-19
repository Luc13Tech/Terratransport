import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to https://<user>.github.io/<repo>/ set base to '/<repo>/'
  // If you deploy to a custom domain or a *.github.io root repo, leave it as '/'
  base: '/',
})

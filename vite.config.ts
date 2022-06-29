import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement:path.resolve(__dirname, './src/components') },
      { find: '@containers', replacement:path.resolve(__dirname, './src/containers') },
      { find: '@icons', replacement:path.resolve(__dirname, './src/assets/icons') },
      { find: '@images', replacement:path.resolve(__dirname, './src/assets') },
      { find: '@hooks', replacement:path.resolve(__dirname, './src/hooks') },
      { find: '@contexts', replacement:path.resolve(__dirname, './src/contexts') }

    ]
  }
})

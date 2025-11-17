import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [
      vue(),
      federation({
        name: 'host-app',
        remotes: {
          mf1: env.VITE_MFE1_URL || 'http://localhost:5001/assets/remoteEntry.js',
          mf2: env.VITE_MFE2_URL || 'http://localhost:5002/assets/remoteEntry.js',
        },
        shared: ['vue']
      })
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})

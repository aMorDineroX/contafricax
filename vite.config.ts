import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true
    },
    hmr: {
      overlay: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      '@components': path.resolve(__dirname, './components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MISSING_NODE_BUILTINS') return
        warn(warning)
      }
    }
  }
})

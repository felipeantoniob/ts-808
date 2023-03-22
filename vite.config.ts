/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
    },
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
})

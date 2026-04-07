import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
    }
  }
}));

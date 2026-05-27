import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Kept as '/' because your repo matches your custom user/org URL domain
  base: '/', 

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Maps the '@' shortcut directly to your source files directory
      '@': path.resolve(__dirname, './src'), 
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});

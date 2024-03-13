import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import images from 'vite-plugin-images';

export default defineConfig({
  plugins: [
    react(),
    images(),
  ],
});

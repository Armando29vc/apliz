import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/apliz/', // 👈 muy importante para GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Aprende lengua indígena del zapoteco',
        short_name: 'Apliz',
        start_url: '.',
        display: 'standalone',
        background_color: '#030219',
        theme_color: '#0f172a',
        icons: [
          {
            src: 'img/Apliz_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/Apliz_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

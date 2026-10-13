import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Stamped at build time so the footer shows when the site was last deployed.
  define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString()) },
});

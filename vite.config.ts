import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI components chunk
          ui: [
            './src/components/ui/Button.tsx',
            './src/components/ui/Card.tsx',
            './src/components/ui/Badge.tsx',
            './src/components/ui/Input.tsx',
            './src/components/ui/LoadingSpinner.tsx'
          ],
          // Icons chunk
          icons: ['lucide-react']
        }
      }
    },
    // Enable source maps for better debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});

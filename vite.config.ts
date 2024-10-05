import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@" : path.resolve(__dirname, "."),
      "@src" : path.resolve(__dirname, "./src"),
      "@assets" : path.resolve(__dirname, "/assets"),
      "@icons" : path.resolve(__dirname, "/assets/icons"),
      "@images" : path.resolve(__dirname, "/assets/images"),
      "@videos" : path.resolve(__dirname, "/assets/videos"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@publicPages": path.resolve(__dirname, "./src/pages/public"),
      "@privatePages": path.resolve(__dirname, "./src/pages/private"),
      "@publicComponents": path.resolve(__dirname, "./src/pages/public/components"),
      "@privateComponents": path.resolve(__dirname, "./src/pages/private/components")
    }
  }
})

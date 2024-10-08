import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@" : path.resolve(__dirname, "."),
      "@assets" : path.resolve(__dirname, "/assets"),
      "@icons" : path.resolve(__dirname, "/assets/icons"),
      "@images" : path.resolve(__dirname, "/assets/images"),
      "@videos" : path.resolve(__dirname, "/assets/videos"),
      "@src" : path.resolve(__dirname, "./src"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@states": path.resolve(__dirname, "./src/states"),
      "@publicPages": path.resolve(__dirname, "./src/pages"),
      "@pages": path.resolve(__dirname, "./src/pages/public"),
      "@publicComponents": path.resolve(__dirname, "./src/pages/public/components"),
      "@privatePages": path.resolve(__dirname, "./src/pages/private"),
      "@privateComponents": path.resolve(__dirname, "./src/pages/private/components")
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import { config } from 'dotenv';

/**run package config */
config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*define process env*/
  envDir:".",
  define: {
    'process.env' : process.env
  },
  server: {
    port: Number(process.env.VITE_PORT),
  },
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
      "@publicPages": path.resolve(__dirname, "./src/pages/public"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@publicComponents": path.resolve(__dirname, "./src/pages/public/components"),
      "@privatePages": path.resolve(__dirname, "./src/pages/private"),
      "@privateComponents": path.resolve(__dirname, "./src/pages/private/components")
    }
  }
})

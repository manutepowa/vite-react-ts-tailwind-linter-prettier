import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // define: {
  //   "process.env": {},
  //   global: {},
  // },
})

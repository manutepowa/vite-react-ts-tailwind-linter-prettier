import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"), //eslint-disable-line
      name: "MyComponent",
      // the proper extensions will be added
      fileName: "component",
    },
  },

  // define: {
  //   "process.env": {},
  //   global: {},
  // },
})

<h1 align="center">Vite 3 - React 18 - Typescript - Tailwind 3 - eslint - prettier</h1>

### Installation

Clone this repo and install all dependencies  
`npm install`

### Development
`npm run dev`


### Features
- eslint
- prettier
- routing with wouter

## Remove hash from files on build
```js
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
```

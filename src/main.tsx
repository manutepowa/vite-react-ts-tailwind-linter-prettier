import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// eslint-disable-next-line prettier/prettier
const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


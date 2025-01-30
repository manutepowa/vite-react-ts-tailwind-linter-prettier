import { Route, Switch } from "wouter"
import Home from "./pages/Home"
import "./index.css"
import type { JSX } from "react"

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default App

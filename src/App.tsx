import { Route, Switch } from "wouter"
import Home from "./pages/Home"
import "./App.css"
import React from "react"
import { NotFound } from "./pages/NotFound"

function App(): React.ReactNode {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default App

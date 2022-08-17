import { Route, Switch } from "wouter"
import Home from "./pages/Home"
import "./App.css"

function App(): React.ReactNode {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default App

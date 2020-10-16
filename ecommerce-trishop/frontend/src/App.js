import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbars from "./components/navbar/navbar"
import Home from "./pages/home/home";

export default function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

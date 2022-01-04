import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
//COMPONENTS
import Typographymui from "./Typographymui"
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Typographymui />
        </Route>
      </Switch>
    </>
  )
}

export default App

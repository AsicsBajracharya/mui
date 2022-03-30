import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import { createTheme, ThemeProvider } from "@material-ui/core"
//COMPONENTS
import Typographymui from "./Typographymui"
import Buttonsmui from "./Buttonsmul"
import Iconmui from "./Iconmui"
import Create from "./Components/Create"
import Notes from "./Components/Notes"
import MakeStylesmui from "./MakeStylesmui"
import CustomTheme from "./CustomTheme"
import GridMUI from "./Grid"
import { green, purple } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[800],
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightRegular: 400,
  },
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact>
            <Create />
          </Route>
          <Route path="/notes" exact>
            <Notes />
          </Route>
          <Route path="/typography">
            <Typographymui />
          </Route>
          <Route path="/buttons" exact>
            <Buttonsmui />
          </Route>
          <Route path="/icons" exact>
            <Iconmui />
          </Route>
          <Route path="/makeStyles" exact>
            <MakeStylesmui />
          </Route>
          <Route path="/customTheme" exact>
            <CustomTheme />
          </Route>
          <Route path="/grid" exact>
            <GridMUI />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App

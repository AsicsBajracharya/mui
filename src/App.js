import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import { createTheme, ThemeProvider } from "@material-ui/core"
//COMPONENTS
import Typographymui from "./Typographymui"
import Buttonsmui from "./Buttonsmul"
import Iconmui from "./Iconmui"
import MakeStylesmui from "./MakeStylesmui"
import CustomTheme from "./CustomTheme"
import { green, purple } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#000000",
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
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App

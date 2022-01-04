import { Grid } from "@material-ui/core"
function App() {
  return (
    <Grid container direction="column">
      <Grid item>this is where the header will be</Grid>
      <Grid item container>
        <Grid xs={12}></Grid>
      </Grid>
    </Grid>
  )
}

export default App

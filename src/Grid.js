import React, { useEffect } from "react"
import { Grid, Paper } from "@material-ui/core"
import NoteCard from "./Components/NoteCard"
function GridMUI() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default GridMUI

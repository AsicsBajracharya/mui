import React, { useEffect } from "react"
import { Typography, makeStyles, Button } from "@material-ui/core"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles({
  btn: {
    fontSize: 50,
    backgroundColor: "green",
    border: "1px solid red",
    transition: "all 2s ease-out",
    "&:hover": {
      backgroundColor: "purple",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: "50px",
  },
})

function MakeStylesmui() {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.title} variant="h2" color="primary">
        Make styles hook
      </Typography>
      <Button variant="contained" color="secondary" className={classes.btn}>
        some random button
      </Button>
    </>
  )
}

export default MakeStylesmui

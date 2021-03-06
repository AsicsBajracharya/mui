import React, { useEffect } from "react"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { makeStyles } from "@mui/styles"
function Typographymui() {
  return (
    <div>
      <Typography variant="h1" color="primary" align="center" gutterBottom>
        Material ui typography
      </Typography>
      <Typography color="secondary" noWrap gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quidem
        libero neque quisquam laborum voluptatibus animi itaque assumenda
        tempora. Autem.
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new Note
      </Typography>
      <Link to="/buttons"> goto buttons</Link>
    </div>
  )
}

export default Typographymui

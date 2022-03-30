import React, { useEffect } from "react"
import { Typography, Button } from "@material-ui/core"
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined"
function Iconmui() {
  return (
    <div>
      <Typography variant="h3" color="secondary">
        Icons
      </Typography>
      <AbcOutlinedIcon />
      <AbcOutlinedIcon color="secondary" fontSize="large" />
      <AbcOutlinedIcon color="action" fontSize="small" />
      <AbcOutlinedIcon color="error" fontSize="small" />
      <AbcOutlinedIcon color="disabled" fontSize="small" />
      <Button variant="contained" color="primary" startIcon={<AbcOutlinedIcon />} endIcon={<AbcOutlinedIcon />}>
        button{" "}
      </Button>
    </div>
  )
}

export default Iconmui

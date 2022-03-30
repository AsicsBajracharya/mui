import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/styles"
import {
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core"

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
})

function CustomTheme(props) {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("todos")
  const classes = useStyles(props)

  function handleSubmit(e) {
    console.log("clicked")
    e.preventDefault()
    if (title == "") {
      setTitleError(true)
    }
    if ((details = "")) {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details)
    }
  }
  return (
    <div>
      <Typography variant="h3" color="primary">
        Custome Theme
      </Typography>
      <Button variant="contained">button</Button>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Note Title"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Note Title"
          color="primary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="money" value="money" />
            <FormControlLabel control={<Radio />} label="todos" value="todos" />
          </RadioGroup>
        </FormControl>

        <Button variant="outlined" color="primary">
          submit
        </Button>
      </form>
    </div>
  )
}

export default CustomTheme

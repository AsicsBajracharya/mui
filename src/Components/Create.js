import React, { useEffect, useState } from "react"
import {
  Typography,
  Button,
  TextField,
  Container,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core"
import { Save } from "@material-ui/icons"
import axios from "axios"

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
})
function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState()
  const [titleError, setTitleError] = useState(false)
  const [details, setDetails] = useState()
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("Money")

  function handleSubmit(e) {
    console.log("form submitted")
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (!title) {
      setTitleError(true)
    }
    if (!details) {
      setDetailsError(true)
    }
    if (title && details) {
      async function postData() {
        try {
          const response = await axios.post("http://localhost:9999/notes", {
            title,
            details,
            category,
          })
          console.log(response.data)
        } catch (err) {
          console.log(err, "There was an error")
        }
      }
      postData()
    }
  }
  return (
    <Container>
      <Typography variant="h6" color="textSecondary">
        Create a new Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          color="secondary"
          label="Notes Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          color="secondary"
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />
        <FormLabel classes={classes.field}>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            row
          >
            <FormControlLabel value="Notes" control={<Radio />} label="Notes" />
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
          </RadioGroup>
        </FormLabel>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<Save />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Create

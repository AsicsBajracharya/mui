import axios from "axios"
import React, { useEffect, useState } from "react"
import { Container, Typography } from "@material-ui/core"
function Notes() {
  const [notes, setNotes] = useState()
  useEffect(() => {
    async function fetch() {
      console.log("fetching...")
      try {
        const response = await axios.get("http://localhost:9999/notes")
        console.log(response.data)
        setNotes(response.data)
      } catch (err) {
        console.log("error..")
        console.log(err, "there was an error")
      }
    }
    fetch()
  }, [])

  return (
    <Container>
      {notes &&
        notes.map((item, i) => {
          return (
            <div key={i}>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
            </div>
          )
        })}
    </Container>
  )
}

export default Notes

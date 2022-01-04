import React, { useEffect } from "react"
import { Button, ButtonGroup, Container } from "@material-ui/core"
function Buttonsmui() {
  return (
    <div>
      <Container>
        <Button type="submit" color="primary">
          Submit
        </Button>
        <Button variant="outlined" type="submit" color="secondary">
          Submit
        </Button>
        <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>One</Button>
          <Button>One</Button>
        </ButtonGroup>
      </Container>
    </div>
  )
}

export default Buttonsmui

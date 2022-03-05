import React from 'react';
import {Navbar,Container} from "react-bootstrap"

const Header = () => {
  return (
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
      <h4>ToDo List</h4></Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  

  
</>
  )
}

export default Header
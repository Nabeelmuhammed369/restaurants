import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
    return (
        
            <Navbar bg="warning" variant="light">
    <Container>
    <Navbar.Brand href="#home" class="text-white">Restaurants</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

       
    )
}

export default Header

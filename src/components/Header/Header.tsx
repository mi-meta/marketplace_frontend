import './header.style.scss';
import { Row, Image, Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Row>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src='/icons/logo.svg' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav className="me-auto pull-width" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Marketplace</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Auctions</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action5">
                  Collections
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Activity
              </Nav.Link>
              <Nav.Link href="#action1">Learn</Nav.Link>
              <Nav.Link href="#action1">Create</Nav.Link>
              <Nav.Link href="#action1">
                <Image src="/icons/user.svg"/>
              </Nav.Link>
              <Nav.Link href="#action1">
                <Image src="/icons/save.svg"/>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
};

export { Header };
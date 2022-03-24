import { Link } from 'react-router-dom';
import './header.style.scss';
import {
  Row,
  Image,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
} from 'react-bootstrap';

function Header() {
  return (
    <Row>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <Image src="/icons/logo.svg" className="img-brand" />
            <span>mi-meta</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <InputGroup className="d-flex">
              <InputGroup.Text id="basic-addon1">
                <Image src={`/icons/lens.svg`} />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search items and collections"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </InputGroup>
            <Nav className="me-auto pull-width" />
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '140px' }} navbarScroll>
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <Link to="/explore">Marketplace</Link>
                <NavDropdown.Item href="#action4">Auctions</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action5">Collections</NavDropdown.Item>
                <NavDropdown.Item href="#action6">New Drops</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Activity</Nav.Link>
              <Nav.Link href="#action1">Learn</Nav.Link>
              <Nav.Link href="#action1">Create</Nav.Link>
              <Nav.Link href="#action1">
                <Image src="/icons/user.svg" />
              </Nav.Link>
              <Nav.Link href="#action1">
                <Image src="/icons/save.svg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export { Header };

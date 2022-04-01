import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../providers';
import { categories, LinkItem } from '../../store';
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
import Sidebar from '../SideBar/Sidebar';

function Header() {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <Row>
      <Navbar bg={`${theme}`} variant={`${theme === 'dark' ? 'dark' : 'light'}`} expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <Image src="/icons/logo.svg" className="img-brand" />
            <span>mi-meta</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Sidebar show={show} setShow={setShow} />
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
              <NavDropdown title="Discover" id="navbarScrollingDropdown">
                <NavDropdown.Item as="span" href="#action/3.1">
                  <Link to="/discover/all">All NFT</Link>
                </NavDropdown.Item>
                {categories.map((item: LinkItem, key: number) => {
                  return (
                    <NavDropdown.Item as="span" key={key}>
                      <Link to={`/discover/${item.link}`}>{item.text}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Item>
                <Link to="/activity" className="nav-link">
                  Activity
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/learn" className="nav-link">
                  Learn
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/profile" className="nav-link">
                  <Image src="/icons/user.svg" />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#action1" onClick={() => setShow(true)}>
                  <Image src="/icons/save.svg" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export { Header };

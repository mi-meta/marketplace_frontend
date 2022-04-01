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
                <Link to="/discover/all">All NFT</Link>
                {categories.map((item: LinkItem, key: number) => {
                  return (
                    <Link to={`/discover/${item.link}`} key={key}>
                      {item.text}
                    </Link>
                  );
                })}
              </NavDropdown>
              <Link to="/activity">Activity</Link>
              <Link to="/learn">Learn</Link>
              <Link to="/create">Create</Link>
              <Link to="/profile">
                <Image src="/icons/user.svg" />
              </Link>
              <Nav.Link href="#action1" onClick={() => setShow(true)}>
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

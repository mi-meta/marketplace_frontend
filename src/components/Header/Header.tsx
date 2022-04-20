import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../providers';
import { categories, LinkItem, MENUITEM, SubMenuList } from '../../store';
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
// let isOpen = false;
function Header() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuselected, setMenuselected] = useState("");
 

  const handleOpen = () => {
    // console.log('open');
    setIsOpen(true);
  };
  const handleClose = () => {
    // console.log('close');
    setIsOpen(false);
  };
  const navigate2discover = (val:any) => {
    setMenuselected(val)
    navigate('/discover-collection');
  };
  document.addEventListener('click', function () {
    handleClose();
  });

  return (
    <Row>
      <Navbar bg={`${theme}`} variant={`${theme === 'dark' ? 'dark' : 'light'}`} expand="lg">
        <Container fluid>
          <Link to="/" className="navbar-brand" onClick={()=>setMenuselected("")}>
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
              <NavDropdown
                as="span"
                title={
                  <Nav.Link as="span" onClick={()=>navigate2discover(MENUITEM[0])} className={menuselected==MENUITEM[0]?"selected_menu":""} >
                    Discover
                  </Nav.Link>
                }
                id="navbarScrollingDropdown"
                onMouseEnter={handleOpen}
                // onMouseLeave={handleClose}
                show={isOpen}
              >
               
              {SubMenuList.map((item: LinkItem, key: number) => {
                return (
                  <NavDropdown.Item as="span" key={key}>
                    <div className='header_menu_item'>{item.text}</div>
                  </NavDropdown.Item>
                );
              })}
              </NavDropdown>
                {/* <NavDropdown.Item as="span" href="#action/3.1">
                  <Link to="/assets">All NFT</Link>
                </NavDropdown.Item>
                {categories.map((item: LinkItem, key: number) => {
                  return (
                    <NavDropdown.Item as="span" key={key}>
                      <Link to={`/discover/${item.link}`}>{item.text}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown> */}
              <Nav.Link as="span" >
                <Link to="/activity" className={`nav-link ${menuselected === MENUITEM[1] ? "selected_menu":""}`} onClick={()=>navigate2discover(MENUITEM[1])}  >
                  Activity
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="/learn" className={`nav-link ${menuselected === MENUITEM[2] ? "selected_menu":""}`} onClick={()=>navigate2discover(MENUITEM[2])}>
                  Learn
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="/create" className={`nav-link ${menuselected === MENUITEM[3] ? "selected_menu":""}`} onClick={()=>navigate2discover(MENUITEM[3])}>
                  Create
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="/profile" className={`nav-link ${menuselected === MENUITEM[4] ? "selected_menu":""}`} onClick={()=>navigate2discover(MENUITEM[4])}>
                  <Image src="/icons/user.svg" />
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Nav.Link href="#action1" onClick={() => setShow(true)}>
                  <Image src="/icons/save.svg" />
                </Nav.Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export { Header };

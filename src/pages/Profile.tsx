import '../styles/profile.scss';
import { Container, Row, Col, Image, Stack, Nav, InputGroup, FormControl } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useContext } from 'react';
import { ThemeContext } from '../providers';
import { CategoryItem } from '../components';

const categories: string[] = [
  'My collections',
  'Created',
  'Favorites',
  'Hidden',
  'Activity',
  'Offers',
  'Listings',
  'Watchlist',
  'Settings',
];
const Profile = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <Container className="profile p-0" fluid>
      <Row className="profile-landing">
        <div className="profile-landing-bg" />
      </Row>
      <Row className="profile-intro">
        <Col md={8} className="m-auto p-4">
          <Image src={`/images/profile.png`} className="m-auto profile-intro-avatar" />
          <Stack>
            <h1>Unnamed User</h1>
            <p className="bold profile-intro-address">
              <Image src={`/icons/eth.svg`} />
              0x03EF36C4A2ad9f53616a32Bf5C41510ee0c06237
            </p>
            <Stack direction="horizontal" className="mt-3">
              <p className="m-0 bold">Dark mode</p>
              <BootstrapSwitchButton
                checked={true}
                onChange={(checked: boolean) => {
                  console.log(checked);
                  if (setTheme) {
                    setTheme(checked ? 'dark' : 'light');
                  }
                }}
                size="xs"
              />
            </Stack>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="m-auto">
          {/* <Container>
            <CNav />
          </Container> */}
          {/* <Stack direction="horizontal" gap={3} className="explore-categories">
            {categories.map((item: string, key: number) => {
              return <span key={key}>{item}</span>;
            })}
          </Stack> */}
          <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            {categories.map((item: string, key: number) => {
              return (
                <Nav.Item key={key}>
                  <Nav.Link>{item}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="m-auto profile-body">
          <Row>
            <Col md={5}>
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
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <CategoryItem id={1} />
            </Col>
            <Col lg={3}>
              <CategoryItem id={2} />
            </Col>
            <Col lg={3}>
              <CategoryItem id={3} />
            </Col>
            <Col lg={3}>
              <CategoryItem id={4} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { Profile };

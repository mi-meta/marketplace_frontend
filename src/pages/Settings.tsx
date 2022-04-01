import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../styles/settings.scss';
// import { ProfileSetting } from '../components';

const Settings = () => {
  // let { path, url } = useRouteMatch();
  return (
    <Container className="settings mb-5" fluid>
      <Row>
        <Col lg={3}>
          <h1 className="underline">Settings</h1>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="profile" className="nav-link active">
              Profile Settings
            </Link>
            <Link
              role="button"
              data-rr-ui-event-key="lid"
              to={`communication`}
              className="nav-link"
            >
              Communications
            </Link>
            <Link to="security" className="nav-link">
              Security
            </Link>
            <Link to="security" className="nav-link">
              Support
            </Link>
          </Nav>
        </Col>
        <Col lg={9} className="settings-body">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export { Settings };

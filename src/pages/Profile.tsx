import '../styles/profile.scss';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container className="profile p-0" fluid>
      <Row className="profile-landing">
        <div className="profile-landing-bg" />
      </Row>
      <Row>
        <Col md={8} className="m-auto p-4">
          <Image src={`/images/profile.png`} className="m-auto" />
          <Stack>
            <h1>Unnamed User</h1>
            <p className="bold">
              <Image src={`/icons/eth.svg`} />
              0x03EF36C4A2ad9f53616a32Bf5C41510ee0c06237
            </p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export { Profile };

import '../styles/profile.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Image src={`/images/profile.png`} />
        </Col>
      </Row>
    </Container>
  );
};

export { Profile };

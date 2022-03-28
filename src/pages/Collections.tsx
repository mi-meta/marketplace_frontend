import { Container, Row, Col } from 'react-bootstrap';
import '../styles/collections.scss';

function Collections() {
  return (
    <Container className="collections p-0" fluid>
      <Row className="collections-landing">
        <div className="collections-landing-bg" />
        <Col md={12} className="collections-landing-title">
          <h1>Explore collections</h1>
        </Col>
      </Row>
    </Container>
  );
}

export { Collections };

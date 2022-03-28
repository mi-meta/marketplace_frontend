import { Container, Row, Col } from 'react-bootstrap';
import '../styles/collection.scss';

function Collection() {
  return (
    <Container className="collections p-0" fluid>
      <Row className="collections-landing">
        <div className="collections-landing-bg" />
        <Col md={12} className="collections-landing-title">
          <h1>Explore collections</h1>
        </Col>
      </Row>
      <Row>
        <h1>LoopingRings</h1>
        <p></p>
      </Row>
    </Container>
  );
}

export { Collection };

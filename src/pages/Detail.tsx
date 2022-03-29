import { Container, Row, Col, Image, ListGroup, Stack } from 'react-bootstrap';
import '../styles/detail.scss';

function Detail() {
  return (
    <Container className="detail">
      <Row>
        <Col lg={5} className="detail-preview">
          <div>
            <Image src={`/images/detail-preview.png`} />
          </div>
          <div>
            <ListGroup>
              <ListGroup.Item>Traits</ListGroup.Item>
              <ListGroup.Item>Traits</ListGroup.Item>
              <ListGroup.Item>Traits</ListGroup.Item>
              <ListGroup.Item>Traits</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col lg={5} className="detail-body">
          <Stack direction="horizontal">
            <div>hit</div>
          </Stack>
          <p>
            Created by: <span className="text-info">Monster Magnet</span>
          </p>
          <p>
            Collection: <span className="text-info">LoopingRings</span>
          </p>
          <p>
            Edition: <span className="text-info">1 of 4</span>
          </p>
          <p>
            Chain: <span className="text-info">Ethereum</span>
          </p>
          <h1>Infinite #874</h1>
          <h1>
            <Image src={`/icons/eth.png`} />
            3.02
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export { Detail };

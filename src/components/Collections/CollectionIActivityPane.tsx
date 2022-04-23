import { Container, Row, Col, Button, Stack, Image, ListGroup} from 'react-bootstrap';
import { CollectionItem } from './CollectionItem';
import './collections.style.scss';

function CollectionIActivityPane() {
  return (
    <Row className="mb-3 collection-body">
    <Col lg={3} className="mt-3">
      <ListGroup as="ol">
        <ListGroup.Item as="li">
          <span>Activity</span>
       
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col lg={9}>
      <Row className="pt-4">
        {new Array(8).fill(22).map((item: number, key: number) => {
          return <CollectionItem key={key} id={key + 1} />;
        })}
      </Row>
    </Col>
  </Row> 
  );
}

export { CollectionIActivityPane };
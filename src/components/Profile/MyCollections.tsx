import { Col, Row } from 'react-bootstrap';
import { CategoryItem } from '../';

const MyCollections = () => {
  return (
    <Row>
      <Col lg={4} md={6} sm={12}>
        <CategoryItem id={1} />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <CategoryItem id={2} />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <CategoryItem id={3} />
      </Col>
      <Col lg={4} md={6} sm={12}>
        <CategoryItem id={4} />
      </Col>
    </Row>
  );
};

export { MyCollections };

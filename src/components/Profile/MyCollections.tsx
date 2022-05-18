import { Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CategoryItem } from '../';

const MyCollections = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Button className="py-3 px-3 collection-create-button" onClick={()=>navigate('/create/collection')}>Create New Collection</Button>
      </div>
      <Row className="mt-3">
        <Col lg={4} md={6} sm={12}>
          <div className="collection-category-container">
            <CategoryItem id={1} type="collection" />
          </div>
          
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="collection-category-container">
            <CategoryItem id={2}  type="collection"/>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="collection-category-container">
            <CategoryItem id={3}  type="collection"/>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="collection-category-container">
            <CategoryItem id={4}  type="collection"/>
          </div>
        </Col>
      </Row>
    </div>
    
  );
};

export { MyCollections };

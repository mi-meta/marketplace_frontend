import './category.style.scss';
import { Row, Col } from 'react-bootstrap';
import { CategoryItem } from './';

const CategoryGroup = () => {
  return (
    <div className="category-group">
      <h1 className="title">
        EXPLORE NFT BY
        <strong> CATEGORY</strong>
      </h1>
      <Row>
        <Col md={8} className="m-auto">
          <Row>
            {/* {new Array(6).fill(1).map((key: number) => {
              return (
                <Col md={4} key={key}>
                  <CategoryItem id={key + 1} />
                </Col>
              );
            })} */}
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={1} />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={2} />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={3} />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={4} />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={5} />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <CategoryItem id={6} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export { CategoryGroup };

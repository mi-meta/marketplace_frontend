import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DropItem } from './DropItem';
import './drops.style.scss';

const TopShelfDrops = () => {
  return (
    <Container className="top-shelf-drops p-5">
      <h1 className="title">
        <span className="font-bold">Top Shelf</span> Drops
      </h1>
      <Row className="mt-5">
        <Col md={10} lg={8}>
          <Row>
            <Col md={4} sm={6}>
              <DropItem id={1} />
            </Col>
            <Col md={4} sm={6}>
              <DropItem id={2} />
            </Col>
            <Col md={4} sm={6}>
              <DropItem id={3} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { TopShelfDrops };

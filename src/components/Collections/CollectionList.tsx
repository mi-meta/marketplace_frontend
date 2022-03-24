import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CollectionListItem } from './CollectionListItem';
import './collections.style.scss';

function CollectionList() {
  return (
    <Container>
      <h1 className="title">Top collections this week</h1>
      <Container className="p-4">
        <Row>
          <Col md={4} sm={12} xs={12}>
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
          </Col>
          <Col md={4} sm={12} xs={12}>
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
          </Col>
          <Col md={4} sm={12} xs={12}>
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
            <CollectionListItem />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export { CollectionList };

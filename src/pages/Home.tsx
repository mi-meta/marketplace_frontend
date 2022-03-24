import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Landing, CollectionList, TopShelfDrops, NFTCard } from '../components';

const Home = () => {
  return (
    <Row className="home">
      <Landing />
      <TopShelfDrops />
      <CollectionList />
      <Row className="nft-carousel">
        <Container className="p-5">
          <h1 className="title">Checkout what&apos s trending</h1>
          <Row className="p-3">
            <Col md={8} className="m-auto">
              <Row>
                <Col md={4}>
                  <NFTCard id={1} />
                </Col>
                <Col md={4}>
                  <NFTCard id={2} />
                </Col>
                <Col md={4}>
                  <NFTCard id={3} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="categories" />
    </Row>
  );
};

export { Home };

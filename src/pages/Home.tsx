import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Landing, CollectionList, TopShelfDrops, NFTCard, CategoryGroup } from '../components';

const Home = () => {
  return (
    <Row className="home">
      <Landing />
      <TopShelfDrops />
      <CollectionList />
      <div className="nft-carousel">
        <Container className="p-5" fluid>
          <h1 className="title text-white">
            YOU <strong className="font-bold">DON’T</strong> WANT TO MISS THESE
          </h1>
          <Row className="p-3">
            <Col md={10} className="m-auto">
              <Row>
                <Col md={4} sm={6}>
                  <NFTCard id={1} />
                </Col>
                <Col md={4} sm={6}>
                  <NFTCard id={2} />
                </Col>
                <Col md={4} sm={6}>
                  <NFTCard id={3} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <CategoryGroup />
    </Row>
  );
};

export { Home };

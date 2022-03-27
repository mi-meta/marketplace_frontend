import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import * as components from '../components';
import { CategoryGroup } from '../components';
// import image from './nfts-bg-dark-parallax.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <Row className="home">
      <components.Landing />
      <components.TopShelfDrops />
      <components.CollectionList />
      <Parallax
        // bgImage={
        //   'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
        // }
        bgImage={'/images/nfts-bg-dark-parallax.png'}
        strength={800}
      >
        <div style={{ height: 800 }}>
          <div
            style={{
              background: 'white',
              padding: 20,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            HTML inside the parallax
          </div>
          <Container className="p-5" fluid>
            <h1 className="title text-white">
              YOU <strong className="font-bold">DON’T</strong> WANT TO MISS THESE
            </h1>
            <Row className="p-3 nft-carousel">
              <Col md={10} className="m-auto">
                <Row>
                  <Carousel responsive={responsive}>
                    {new Array(10).fill(2).map((key: number) => {
                      return (
                        <div style={{ padding: '12px' }} key={key}>
                          <components.NFTCard id={key} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
      {/* <div className="nft-carousel">
        <div className="nft-carousel-bg"></div>
        <Container className="p-5" fluid>
          <h1 className="title text-white">
            YOU <strong className="font-bold">DON’T</strong> WANT TO MISS THESE
          </h1>
          <Row className="p-3">
            <Col md={10} className="m-auto">
              <Row>
                <Col md={4} sm={12}>
                  <components.NFTCard id={1} />
                </Col>
                <Col md={4} sm={12}>
                  <components.NFTCard id={2} />
                </Col>
                <Col md={4} sm={12}>
                  <components.NFTCard id={3} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}
      <CategoryGroup />
    </Row>
  );
};

export { Home };

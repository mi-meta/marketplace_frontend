import { Container, Row, Col } from 'react-bootstrap';
import { Landing, CollectionList, TopShelfDrops, Card } from '../components';

const Home = () => {
  return (
    <Row className='home'>
      <Landing />
      <TopShelfDrops />
      <CollectionList />
      <Row className='nft-carousel'>
        <Container className="p-5">
          <h1 className='title'>Checkout what's trending</h1>
          <Row className="p-3">
            <Col md={8} className='m-auto'>
              <Row>
                <Col md={4}>
                  <Card />
                </Col>
                <Col md={4}>
                  <Card />
                </Col>
                <Col md={4}>
                  <Card />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className='categories' >

      </Row>
    </Row>
  );
};

export { Home };
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { NFTCard } from '../components';
import '../styles/explore.scss';

const categories: string[] = [
  'trending',
  'art',
  'music',
  'photography',
  'utility',
  'videos',
  'domain names',
];

function Explore() {
  return (
    <Container className="explore p-0" fluid>
      <Row className="explore-landing">
        <div className="explore-landing-bg" />
        <Col md={12} className="explore-landing-title">
          <h1>Explore collections</h1>
        </Col>
      </Row>
      <Row>
        <Stack direction="horizontal" gap={3} className="explore-categories">
          {categories.map((item: string, key: number) => {
            return <span key={key}>{item}</span>;
          })}
        </Stack>
      </Row>
      <Row>
        {new Array(20).fill(1).map((_item: number, key: number) => {
          return <NFTCard id={_item} key={key} />;
        })}
      </Row>
    </Container>
  );
}

export { Explore };

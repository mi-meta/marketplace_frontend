import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { NFTCard } from '../components';
import '../styles/explore.scss';
import { categories, LinkItem } from '../store';

function Explore() {
  const { type } = useParams();
  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <Container className="explore p-0" fluid>
      <Row className="explore-landing">
        <div className="explore-landing-bg" />
        <Col md={12} className="explore-landing-title">
          <h1>Discover collections</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={12} className="m-auto pt-5">
          <Stack direction="horizontal" gap={4} className="explore-categories">
            <Link to="/trending">Trending</Link>
            {categories.map((item: LinkItem, key: number) => {
              return (
                <Link to={`/discover/${item.link}`} key={key}>
                  {item.text}
                </Link>
              );
            })}
          </Stack>
        </Col>
      </Row>
      <Row className="explore-nft">
        {new Array(20).fill(1).map((_item: number, key: number) => {
          return <NFTCard id={key + 1} key={key} />;
          // return (
          //   <Col lg={3} md={4} sm={6} xs={12} key={key}>
          //     <NFTCard id={key + 1} />
          //   </Col>
          // );
        })}
      </Row>
    </Container>
  );
}

export { Explore };

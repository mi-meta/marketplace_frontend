import { Container, Row, Col, Button, Stack, Image, ListGroup } from 'react-bootstrap';
import '../styles/collection.scss';
import { CollectionItem } from '../components';

function Collection() {
  return (
    <Container className="collection p-0" fluid>
      <Row className="collection-landing">
        <div className="collection-landing-bg" />
        <div className="collection-badge" />
      </Row>
      <Row className="collection-description">
        <h1>LoopingRings</h1>
        <p>
          Created By: <span className="text-info mx-2">Monster Magnet</span>
          <Button className="mx-2">
            <Image src="/icons/twitter.svg" width={15} height={15} />
          </Button>
          <Button>
            <Image src="/icons/discord.svg" width={15} height={15} />
          </Button>
        </p>
        <Stack direction="horizontal" className="collection-params">
          <Stack direction="horizontal">
            <div>
              <h1>333</h1>
              <p>items</p>
            </div>
            <div>
              <h1>285</h1>
              <p>owners</p>
            </div>
          </Stack>
          <Stack direction="horizontal">
            <div>
              <h1>
                <Image src={`/icons/eth.png`} className="mb-1" />
                <span>0.32</span>
              </h1>
              <p>floor price</p>
            </div>
            <div>
              <h1>
                <Image src={`/icons/eth.png`} className="mb-1" />
                <span>30.6</span>
              </h1>
              <p>volume trated</p>
            </div>
          </Stack>
        </Stack>
      </Row>
      <Row className="collection-tab">
        <Stack direction="horizontal">
          <div>
            <Image src="/icons/item.png" />
            <p>Items</p>
          </div>
          <div>
            <Image src="/icons/Graph Poly.png" />
            <p>Activity</p>
          </div>
        </Stack>
      </Row>
      <Row className="mb-3 collection-body">
        <Col lg={3} className="mt-3">
          <ListGroup as="ol">
            <ListGroup.Item as="li">
              <span>Trait</span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <span>Trait</span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <span>Trait</span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <span>Trait</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={9}>
          <Row className="pt-4">
            {new Array(8).fill(22).map((item: number, key: number) => {
              return <CollectionItem key={key} id={key + 1} />;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Collection };

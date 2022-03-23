import { Row } from 'react-bootstrap';
import { Landing, CollectionList, TopShelfDrops, Card } from '../components';

const Home = () => {
  return (
    <Row>
      <Landing />
      <TopShelfDrops />
      <CollectionList />
      <Row className='nft-carousel'>

      </Row>
      <Row className='categories' >

      </Row>
    </Row>
  );
};

export { Home };
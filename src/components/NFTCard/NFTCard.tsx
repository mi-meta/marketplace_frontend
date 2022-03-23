import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import './nft-card.style.scss';

const NFTCard = () => {
  return (
    <Card style={{ width: '300px' }} className='nft-card'>
      <Card.Img variant="top" src="/images/trending/1.png" />
      <Card.Body>
        <Card.Text>
          1 Edition minted
        </Card.Text>
        <Card.Title>NFT Title</Card.Title>
        <Card.Text className="bold">
          Supporting description for the card goes here like this. Clicking on the truncated description...
        </Card.Text>
        <Card.Text className="bold">
          Price
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export { NFTCard };

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './nft-card.style.scss';

function NFTCard({ id }: { id: number }) {
  const navigate = useNavigate();
  const showDetail = (id: number) => {
    console.log(id);
    navigate('/collection');
  };
  return (
    // <Link to="/detail">
    <Card className="nft-card m-auto" onClick={() => showDetail(id)}>
      <Card.Img variant="top" src={`/images/nft/${id}.png`} />
      <Card.Body>
        <Card.Text>1 Edition minted</Card.Text>
        <Card.Title>NFT Title</Card.Title>
        <Card.Text className="bold">
          Supporting description for the card goes here like this. Clicking on the truncated
          description...
        </Card.Text>
        <Card.Text className="bold">Price</Card.Text>
      </Card.Body>
    </Card>
    // </Link>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { NFTCard };

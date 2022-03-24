import React from 'react';
import { Card } from 'react-bootstrap';
import './nft-card.style.scss';

function NFTCard({ id }: { id: number }) {
  return (
    <Card style={{ width: '300px' }} className="nft-card">
      <Card.Img variant="top" src={`/images/trending/${id}.png`} />
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
  );
}

// eslint-disable-next-line import/prefer-default-export
export { NFTCard };

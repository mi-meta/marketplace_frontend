import { Card } from 'react-bootstrap';
import './collections.style.scss';

function CollectionItem({ id }: { id: number }) {
  return (
    <Card className="collection-card">
      <Card.Img variant="top" src={`/images/collection/Image (${id + 5}).png`} />
      <Card.Body>
        <Card.Text className="bold">Collection Name</Card.Text>
        <Card.Text className="font-bold">#MM-1357</Card.Text>
        <Card.Text className="bold">Price</Card.Text>
      </Card.Body>
    </Card>
  );
}

export { CollectionItem };

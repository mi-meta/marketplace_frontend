import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './collections.style.scss';

function CollectionItem({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <Card className="collection-card" onClick={()=>navigate('/detail')}>
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

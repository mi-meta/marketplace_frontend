import { Card } from 'react-bootstrap';

const CategoryItem = ({ id }: { id: number }) => {
  return (
    <div className="category-item">
      <Card className="text-white m-auto">
        <Card.Img src={`/images/category/${id.toString()}.png`} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Supporting description for the card goes here like this.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export { CategoryItem };

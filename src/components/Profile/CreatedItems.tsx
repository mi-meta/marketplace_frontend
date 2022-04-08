import { NFTCard } from '../';
import { Row } from 'react-bootstrap';

const CreatedItems = () => {
  return (
    <Row>
      {new Array(10).fill(1).map((_, key: number) => {
        return <NFTCard id={key + 1} key={key} />;
      })}
    </Row>
  );
};

export { CreatedItems };
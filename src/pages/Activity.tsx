import { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { DropdownComp } from '../components';
import '../styles/activity.scss';
import { chains, categories, durations, LinkItem } from '../store';

const heads = ['collection', 'volume', '24h %', 'id%', 'floor price', 'owners', 'items'];
const data: DType[] = [
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    p24: '+205.3%',
    p7d: '+20.3%',
    floor_price: '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    p24: '+205.3%',
    p7d: '+20.3%',
    floor_price: '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    p24: '+205.3%',
    p7d: '+20.3%',
    floor_price: '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    p24: '+205.3%',
    p7d: '+20.3%',
    floor_price: '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    p24: '+205.3%',
    p7d: '+20.3%',
    floor_price: '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
];
type DType = {
  id: number;
  collection: string;
  volume: string;
  p24: string;
  p7d: string;
  floor_price: string;
  owners: string;
  items: string;
};

function Activity() {
  const [_categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const _cats: string[] = categories.map((item: LinkItem) => {
      return item?.text;
    });
    setCategories(_cats);
  }, []);
  return (
    <Container className="activity">
      <Row className="activity-header mt-5 pt-3">
        <h1>Top NFTs</h1>
        <p className="mt-3">
          All of the top NFT’s on Mi-Meta, ranked by volume, floor price and more
        </p>
      </Row>
      <Row className="mt-3 activity-category p-3">
        <Col>
          <DropdownComp items={['all chains', ...chains]} />
        </Col>
        <Col>
          <DropdownComp items={['all categories', ..._categories]} />
        </Col>
        <Col>
          <DropdownComp items={durations} />
        </Col>
      </Row>
      <Row className="mb-5 mt-4">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              {heads.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item: DType, index: number) => {
              return (
                <tr key={index}>
                  <td>{item['id']}</td>
                  <td>{item['collection']}</td>
                  <td>{item['volume']}</td>
                  <td>{item['p24']}</td>
                  <td>{item['p7d']}</td>
                  <td>{item['floor_price']}</td>
                  <td>{item['owners']}</td>
                  <td>{item['items']}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export { Activity };

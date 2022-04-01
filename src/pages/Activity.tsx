import { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { DropdownComp } from '../components';
import '../styles/activity.scss';
import { chains, categories, durations } from '../store';

const heads = ['collection', 'volume', '24h %', '7d%', 'floor price', 'owners', 'items'];
const data = [
  {
    id: 1,
    collection: 'Bored Pandas Gym',
    volume: '5478.76',
    '24%': '+205.3%',
    '7d%': '+20.3%',
    'floor price': '1.76',
    owners: '15.2k',
    items: '30.6k',
  },
];
function Activity() {
  const [_categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const _cats: string[] = categories.map((item: any) => {
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
            {data.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{item['id']}</td>
                  <td>{item['collection']}</td>
                  <td>{item['volume']}</td>
                  <td>{item['24%']}</td>
                  <td>{item['7d%']}</td>
                  <td>{item['floor price']}</td>
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

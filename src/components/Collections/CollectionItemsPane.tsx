import { useContext, useState } from 'react';
import { Container, Row, Col, Button, Stack, Image, ListGroup, InputGroup, FormControl, Form, ButtonGroup} from 'react-bootstrap';
import { CollectionItem } from './CollectionItem';
import { DropdownComp } from '../DropdownComp';
import { ThemeContext } from '../../providers';
import { chains, categories, durations, LinkItem, sortMethod, collectionType, currencyType, chainImage, chainData } from '../../store';
import {FilterCard} from './FilterCard'
import './collections.style.scss';
import '../../styles/activity.scss';

function CollectionItemsPane() {
  const { theme } = useContext(ThemeContext);
  const [activeChain, setActiveChain] = useState(chainData[0].name);
  return (
    <Row className="mb-3 collection-body">
    <Col lg={3} className="mt-4">
      <Row>
        <Col>
          <span className="filter-text">Filter</span>
        </Col>
        
      </Row>
      <Row>
        <FilterCard id="Sale Type">
          <Row className="align-items-center">
            <Col><Button variant="primary" className="filter-button">Buy Now</Button></Col>
            <Col> <span> New </span> </Col>
          </Row>
          <Row className="align-items-center">
            <Col> <span> Auction </span></Col>
            <Col><Button variant="primary"  className="filter-button">Has Offers</Button> </Col>
          </Row>
        </FilterCard>
      </Row>
      <Row>
        <FilterCard id="Price">
          <Row className="align-items-center">
            <Form.Select>
              {currencyType.map((item) => <option value="1">{item}</option>)}
            </Form.Select>
          </Row>
          <Row className="align-items-center mt-1">
            <Col sm={5} className="px-0">
              <Form.Control type="text" placeholder="Min" className="collection-filter-input"></Form.Control>
            </Col>
            <Col sm={2} className="px-0"><span>to</span></Col>
            <Col sm={5} className="px-0"><Form.Control type="text" placeholder="Max" className="collection-filter-input"></Form.Control></Col>
          </Row>
          <Row className="mt-2 align-items-center">
            <Col sm={6} className="px-0"><Button variant="primary" className="filter-button">Apply Filter</Button></Col>
          </Row>
        </FilterCard>
      </Row>
      <Row>
        <FilterCard id="Chains">
            <div className="custom-button-group">
              {chainData.map(item => <Button variant="secondary" className={`my-1 py-1 ${item.name === activeChain ? "button-active":""}`} onClick={() => setActiveChain(item.name)}><span className="px-1"><img src={item.image} style={{width:20}} /></span>{item.name}</Button>)}
{/*               
              <Button variant="secondary" className="my-1 py-1">2</Button>
              <Button variant="secondary" className="my-1 py-1">3</Button>
              <Button variant="secondary" className="my-1 py-1">4</Button> */}
            </div>
        </FilterCard>
      </Row>
    </Col>
    <Col lg={9}>
      <Row className="pt-4 justify-content-around">
        <Row>
            <Col sm={12} md={4}>
            <InputGroup className="d-flex custom-input-group">
              <InputGroup.Text id="basic-addon1">
                <Image src={`/icons/lens.svg`} />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                className={theme === "dark" ? "search-input-dark":"search-input-light"}
                aria-label="Search"
                // value={searchval}
                // onChange = {e=> changeValue(e.target.value)}
              />
            </InputGroup>
            </Col >
            <Col sm={12} md={4}>
                <DropdownComp items={collectionType} />
            </Col>
            <Col sm={12} md={4}>
                <DropdownComp items={sortMethod} />
            </Col>
        </Row>
        {new Array(8).fill(22).map((item: number, key: number) => {
          return <CollectionItem key={key} id={key + 1} />;
        })}
      </Row>
    </Col>
  </Row> 
  );
}

export { CollectionItemsPane };
import { Dropdown } from 'react-bootstrap';
import './dropdown.comp.style.scss';

const DropdownComp = ({ items }: { items: string[] }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {items[0]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item: string, key: number) => {
          return (
            <Dropdown.Item href={`#/action-${key}`} key={key}>
              {item}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { DropdownComp };

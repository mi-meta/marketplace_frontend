import '../styles/create.scss';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Create() {
  return (
    <Container className="create">
      <Outlet />
    </Container>
  );
}

export { Create };

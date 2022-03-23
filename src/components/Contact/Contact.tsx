import { Row, Col, Stack, FormControl, Button } from 'react-bootstrap';
import './contact.style.scss';
const Contact = () => {
  return (
    <Row className="contact">
      <Col md={6} sm={12}>
        <h1>YOU DON’T MISS A THING</h1>
        <p>If that’s you, then you definitely want to join our mailing list to be the first to know about newest drops, trending collections, and all the latest on everything mi meta!</p>
        <Stack direction='horizontal' gap={3}>
          <FormControl
            placeholder='Enter your email address'
          />
          <Button>Sign me up!</Button>
        </Stack>
      </Col>
      <Col md={6} sm={12}>
        b
      </Col>
    </Row>
  )
};

export { Contact };
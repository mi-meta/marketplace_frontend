import './landing.style.scss';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container fluid >
      
      <Row className='landing'>
        <div className='landing-bg'>
        
        </div>
        <Col md={6} className='landing-title'>
          <h1>Create, Collect, & Explore NFTs</h1>
          <p>A quick supportive, and easy to understand catchphrase, slogan, tagline, or the punchline of the brand.</p>
          <Button size='lg'>
            <span>Call to Action</span>
          </Button>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
    
  )
};

export { Landing };
import { Row, Image } from 'react-bootstrap';
import './footer.style.scss';

const Footer = () => {
  return (
    <Row className='footer'>
      <div>
        <Image src={`/icons/logo-white.svg`} width={23} height={28}/>
      </div>
      <div className="px-5 mx-5">
        <p className='bold text-light'>footer item</p>
      </div>
    </Row>
  )
};

export { Footer };

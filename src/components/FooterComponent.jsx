import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className='fw-bold'>ihbsCounter.</h3>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum aliquid voluptatibus cumque ut maxime cupiditate odit ullam asperiores omnis!</p>
            <div className='no'>
              <Link>
                <i className='fa-brands fa-whatsapp'></i>
                <p>+62 123-4567-8910</p>
              </Link>
            </div>
            <div className='mail'>
              <Link>
                <i className='fa-regular fa-envelope'></i>
                <p>ihbscounter@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col>
          
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent

import {Container, Row, Col} from 'react-bootstrap';
import {semuaKelas} from '../data/index';

const KelasPage = () => {
  return (
    <div className='kelas'>
      <Container>
        <Row>
          <Col>
            <h1>Semua Kelas</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KelasPage

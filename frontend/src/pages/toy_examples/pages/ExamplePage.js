import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Cat1 from "../media/cats/00000110_003.jpg"
import Cat2 from '../media/cats/00000001_008.jpg';
import Cat3 from '../media/cats/00000001_005.jpg';

export function ExamplePage() {
  return (
      <div id="cat-output-demonstration">
        <Container fluid>
          <Row>
            <Col xs={6} md={4}><Image src={Cat1} alt="Cat" thumbnail/></Col>
              <Col xs={6} md={4}><Image src={Cat2} alt="Cat" thumbnail/></Col>
              <Col xs={6} md={4}><Image src={Cat3} alt="Cat" thumbnail/></Col>
          </Row>
        </Container>
      </div>
  );
}

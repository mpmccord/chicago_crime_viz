import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cat1 from '../media/cats/00000001_000.jpg';
import Cat2 from '../media/cats/00000001_008.jpg';
import Cat3 from '../media/cats/00000001_005.jpg';
export function ExamplePage() {
  return (
      <div id="cat-output-demonstration">
        <Container width={"50%"}>
          <Row>
            <Col id="col01"><img src={Cat2} alt="Cat" />;</Col>
              <Col><img src={Cat3} alt="Cat" />;</Col>
          </Row>
        </Container>
      </div>
  );
}

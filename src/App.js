import React from "react";
import {
  Badge,
  Row,
  Col,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Alert,
  Image,
  Container,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-6 text-align-start">
            <Alert variant="primary">Website React bootstrap</Alert>
          </Col>
          <Col className="col-4 text-align-center" gap={2}>
            <ButtonGroup>
              <Button variant="primary">
                Profile
                <Badge bg="light" className="text-dark">
                  9
                </Badge>
              </Button>
              <Button variant="primary">
                Message
                <Badge bg="light" className="text-dark">
                  15
                </Badge>
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="col-2 text-align-end">
            <div className="d-flex align-items-center me-3">
              <Image
                src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                alt="user icon"
                width="30px"
                roundedCircle
              />
              <h4>Andreas</h4>
            </div>
          </Col>
        </Row>

        {/* breadcrumb */}
        <Breadcrumb className="text-end" bg="secondary">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* berita */}
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* Card 4 */}
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

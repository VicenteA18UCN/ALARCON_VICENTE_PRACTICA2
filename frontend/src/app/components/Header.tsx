import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Header({
  fullname,
  description,
}: {
  fullname: string;
  description: string;
}) {
  return (
    <Row>
      <Col className="col-md-8">
        <Row>
          <h1 className="fw-bold text-primary display-5 d-flex justify-content-center">
            {fullname}
          </h1>
        </Row>
        <Row className="m-1 mt-4">
          <Card>
            <CardBody>{description}</CardBody>
          </Card>
        </Row>
      </Col>
      <Col className="col-md-4 d-flex justify-content-center">
        <Image
          src={require("../assets/images/personal.jpg")}
          style={{ width: "250px", height: "270px" }}
          className="img-fluid rounded-5 border border-dark"
        />
      </Col>
    </Row>
  );
}

export default Header;

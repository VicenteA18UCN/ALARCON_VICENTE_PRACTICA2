import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import facebookImg from "../assets/images/facebook-svgrepo-com.svg";
import githubImg from "../assets/images/github-repo-git-octocat-svgrepo-com.svg";

function Personal({
  age,
  location,
  occupation,
  email,
  phone,
  facebook,
  github,
}: {
  age: number;
  location: string;
  occupation: string;
  email: string;
  phone: string;
  facebook: string;
  github: string;
}) {
  return (
    <Row className="mt-4">
      <Row>
        <Col className="col-xl-6 mx-5">
          <h3>Información Personal</h3>
          <ul>
            <li>Edad: {age} años</li>
            <li>Ubicación: {location}</li>
            <li>Ocupación: {occupation}</li>
          </ul>
        </Col>
        <Col className="col-xl-4 mx-5">
          <h3>Información de Contacto</h3>
          <ul>
            <li>Email: {email}</li>
            <li>Telefono: {phone}</li>
            <li>
              <a href={facebook} target="_blank">
                <Image
                  src={facebookImg}
                  style={{ width: "8%", height: "8%" }}
                />
              </a>
            </li>
            <li>
              <a href={github} target="_blank">
                <Image
                  src={githubImg}
                  style={{ width: "8%", height: "8%" }}
                ></Image>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Row>
  );
}

export default Personal;

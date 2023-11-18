import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Header({
  fullname,
  description,
  image,
}: {
  fullname: string;
  description: string;
  image: string;
}) {
  console.log(image);
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-8 ">
          <div className="row">
            <h1 className="fw-bold text-primary display-5 d-flex justify-content-center">
              {fullname}
            </h1>
          </div>
          <div className="row m-1 mt-4 ">
            <div className="card">
              <div className="card-body justify">{description}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center ">
          <Image
            src={require(`../assets/${image}`)}
            className="img-fluid rounded-5 border border-dark"
            width={200}
            height={200}
            alt="photo-vicente"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

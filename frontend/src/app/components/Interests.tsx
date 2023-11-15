import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

function Interests({
  name,
  description,
  showImage = false,
}: {
  name: string;
  description: string;
  showImage: boolean;
}) {
  return (
    <ListGroup.Item
      disabled
      className="d-flex justify-content-between align-items-start text-black"
    >
      <div className="ms-2 me-auto text-xl">
        <div className="fw-bold justify">{name}</div>
        {description}
      </div>
      {showImage && (
        <Image
          src={require("../assets/images/Laravel.jpg")}
          style={{ width: "50%", height: "50%" }}
        />
      )}
    </ListGroup.Item>
  );
}

export default Interests;

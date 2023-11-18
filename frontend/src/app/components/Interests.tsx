import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

function Interests({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string | null;
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
      {image && (
        <Image
          src={require(`../assets/${image}`)}
          className="img-thumbnail w-25 h-75 float-end"
          alt="..."
        />
      )}
    </ListGroup.Item>
  );
}

export default Interests;

import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { ProgressBar } from "react-bootstrap";

function Tools({ name, percentage }: { name: string; percentage: number }) {
  return (
    <ListGroup.Item>
      <h5>{name}</h5>
      <ProgressBar animated now={percentage} label={`${percentage}%`} />
    </ListGroup.Item>
  );
}

export default Tools;

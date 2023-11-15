import React from "react";
import agent from "./app/api/agent";
import Container from "react-bootstrap/Container";
import Profile from "./app/models/Profile";
import Header from "./app/components/Header";
import Personal from "./app/components/Personal";
import Interests from "./app/components/Interests";
import { ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Interest from "./app/models/Interest";
import Tool from "./app/models/Tool";
import Tools from "./app/components/Tools";
import "./app/assets/style.css";

function App() {
  const [profileInfo, setProfileInfo] = React.useState<Profile>();
  const [interestInfo, setInterestInfo] = React.useState<Interest[]>([]);
  const [toolInfo, setToolInfo] = React.useState<Tool[]>([]);

  React.useEffect(() => {
    agent.Info.profile().then((response) => {
      setProfileInfo(response.profile);
      setInterestInfo(response.interest);
      setToolInfo(response.tools);
    });
  }, []);
  return (
    <>
      <Container className="border border-dark mt-4 mb-4 p-4 rounded container-color">
        <Header
          fullname={profileInfo?.fullname ?? ""}
          description={profileInfo?.description ?? ""}
        />
        <Personal
          age={profileInfo?.age ?? 0}
          location={profileInfo?.location ?? ""}
          occupation={profileInfo?.occupation ?? ""}
          email={profileInfo?.email ?? ""}
          phone={profileInfo?.phone ?? ""}
          facebook={profileInfo?.facebook ?? ""}
          github={profileInfo?.github ?? ""}
        />
        <Row>
          <h3>Intereses</h3>
          <ListGroup className="list-group-numbered">
            {interestInfo.map((interest, index) => (
              <Interests
                key={index}
                name={interest?.name ?? ""}
                description={interest?.description ?? ""}
                showImage={index === 0}
              />
            ))}
          </ListGroup>
        </Row>
        <Row className="mt-4">
          <h3>Herramientas</h3>
          <ListGroup className="mt-2">
            {toolInfo.map((tool, index) => (
              <Tools
                key={index}
                name={tool?.name ?? ""}
                percentage={tool?.percentage ?? 0}
              />
            ))}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}

export default App;

import React from "react";
import agent from "../app/api/agent";
import Container from "react-bootstrap/Container";
import Profile from "../app/models/Profile";
import Header from "../app/components/Header";
import Personal from "../app/components/Personal";
import Interests from "../app/components/Interests";
import { ListGroup } from "react-bootstrap";
import { Button } from "@mui/material";
import Row from "react-bootstrap/Row";
import Interest from "../app/models/Interest";
import Tool from "../app/models/Tool";
import Tools from "../app/components/Tools";
import "../app/assets/style.css";
import EditUserForm from "./EditHeaderForm";
import EditInterestForm from "./EditInterestForm";
import EditToolForm from "./EditToolForm";

const defaultProfile: Profile = {
  fullname: "",
  description: "",
  age: 0,
  location: "",
  occupation: "",
  email: "",
  phone: "",
  facebook: "",
  github: "",
  image: "",
  interests: [],
  tools: [],
};

const defaultInterest: Interest = {
  name: "",
  description: "",
  image: "",
};

const defaultTool: Tool = {
  name: "",
  percentage: 0,
};

function App() {
  const [profileInfo, setProfileInfo] = React.useState<Profile>();
  const [currentProfile, setCurrentProfile] = React.useState<Profile>(
    profileInfo ?? defaultProfile
  );
  const [currentInterest, setCurrentInterest] =
    React.useState<Interest>(defaultInterest);
  const [currentIdInterest, setCurrentIdInterest] = React.useState<number>(0);
  const [isEditFormOpen, setIsEditFormOpen] = React.useState<boolean>(false);
  const [isInterestFormOpen, setIsInterestFormOpen] =
    React.useState<boolean>(false);
  const [isToolFormOpen, setIsToolFormOpen] = React.useState<boolean>(false);
  const [currentTool, setCurrentTool] = React.useState<Tool>(defaultTool);
  const [currentIdTool, setCurrentIdTool] = React.useState<number>(0);
  const [interestInfo, setInterestInfo] = React.useState<Interest[]>([]);
  const [toolInfo, setToolInfo] = React.useState<Tool[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    agent.Info.profile().then((response) => {
      console.log(response.interests);
      setProfileInfo(response);
      setInterestInfo(response.interests);
      setToolInfo(response.tools);
      setLoading(false);
    });
  }, []);

  const handleClickUpdate = (updatedProfile: Profile) => {
    agent.Profile.update(updatedProfile)
      .then((response) => {
        window.location.reload();
        setTimeout(() => setProfileInfo(response), 1000);

        console.log(response);
        handleCloseEditForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickUpdateTool = (tool: Tool) => {
    agent.Tool.update(currentIdTool + 1, tool).then((response) => {
      console.log(response);
      window.location.reload();
      handleCloseToolForm();
    });
  };

  const handleClickUpdateInterest = (interest: Interest) => {
    agent.Interest.update(currentIdInterest + 1, interest).then((response) => {
      console.log(response);
      window.location.reload();
      handleCloseInterestForm();
    });
  };

  const handleEditTool = (tool: Tool) => {
    setIsToolFormOpen(true);
    setCurrentTool(tool);
  };

  const handleEditInterest = (interest: Interest) => {
    setIsInterestFormOpen(true);
    setCurrentInterest(interest);
  };

  const handleEditClient = (profile: Profile) => {
    setIsEditFormOpen(true);
    setCurrentProfile(profile);
  };

  const handleOpenToolForm = (id: any) => {
    console.log(id);
    setCurrentIdTool(id);
    handleEditTool(toolInfo[id] ?? defaultTool);
  };
  const handleOpenEditForm = () => {
    handleEditClient(profileInfo ?? defaultProfile);
  };
  const handleOpenInterestForm = (id: any) => {
    console.log(id);
    setCurrentIdInterest(id);
    handleEditInterest(interestInfo[id] ?? defaultProfile);
  };

  const handleCloseToolForm = () => {
    setCurrentTool(defaultTool);
    setCurrentIdTool(0);
    setIsToolFormOpen(false);
  };

  const handleCloseInterestForm = () => {
    setCurrentInterest(defaultInterest);
    setCurrentIdInterest(0);
    setIsInterestFormOpen(false);
  };

  const handleCloseEditForm = () => {
    setCurrentProfile(defaultProfile);
    setIsEditFormOpen(false);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="background p-4">
        <Container className="border border-dark p-4 rounded container-color">
          <Button variant="outlined" onClick={handleOpenEditForm}>
            Editar
          </Button>
          <Header
            fullname={profileInfo?.fullname ?? ""}
            description={profileInfo?.description ?? ""}
            image={profileInfo?.image ?? ""}
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
                <div key={index}>
                  <Interests
                    name={interest?.name ?? ""}
                    description={interest?.description ?? ""}
                    image={interest?.image}
                  />
                  <Button onClick={() => handleOpenInterestForm(index)}>
                    Editar
                  </Button>
                </div>
              ))}
            </ListGroup>
          </Row>
          <Row className="mt-4">
            <h3>Herramientas</h3>
            <ListGroup className="mt-2">
              {toolInfo.map((tool, index) => (
                <div key={index}>
                  <Tools
                    name={tool?.name ?? ""}
                    percentage={tool?.percentage ?? 0}
                  />
                  <Button onClick={() => handleOpenToolForm(index)}>
                    Editar
                  </Button>
                </div>
              ))}
            </ListGroup>
          </Row>
          {isEditFormOpen && (
            <EditUserForm
              isOpen={isEditFormOpen}
              initialProfile={currentProfile}
              handleClickClose={handleCloseEditForm}
              handleClickUpdate={handleClickUpdate}
            />
          )}
          {isInterestFormOpen && (
            <EditInterestForm
              isOpen={isInterestFormOpen}
              initialInterest={currentInterest}
              handleClickClose={handleCloseInterestForm}
              handleClickUpdate={handleClickUpdateInterest}
            />
          )}
          {isToolFormOpen && (
            <EditToolForm
              isOpen={isToolFormOpen}
              initialTool={currentTool}
              handleClickClose={handleCloseToolForm}
              handleClickUpdate={handleClickUpdateTool}
            />
          )}
        </Container>
      </div>
    </>
  );
}

export default App;

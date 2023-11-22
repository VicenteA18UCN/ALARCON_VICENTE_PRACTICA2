import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Profile from "../app/models/Profile";

interface Props {
  isOpen: boolean;
  initialProfile: Profile;
  handleClickClose: () => void;
  handleClickUpdate: (profile: Profile) => void;
}

const EditUserForm = ({
  isOpen,
  initialProfile,
  handleClickClose,
  handleClickUpdate,
}: Props) => {
  const [open, setOpen] = React.useState(isOpen);
  const [profile, setProfile] = React.useState<Profile>(initialProfile);

  const handleClientChange = (event: any) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
    handleClickClose();
  };
  const handleOnSubmit = () => {
    handleClickUpdate(profile);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fullname"
            label="Nombre completo"
            type="text"
            fullWidth
            variant="standard"
            value={profile.fullname}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descripcion"
            type="text"
            fullWidth
            variant="standard"
            value={profile.description}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Edad"
            type="text"
            fullWidth
            variant="standard"
            value={profile.age}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Ubicación"
            type="text"
            fullWidth
            variant="standard"
            value={profile.location}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="occupation"
            label="Ocupación"
            type="text"
            fullWidth
            variant="standard"
            value={profile.occupation}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Emial"
            type="text"
            fullWidth
            variant="standard"
            value={profile.email}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Número telefónico"
            type="text"
            fullWidth
            variant="standard"
            value={profile.phone}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleOnSubmit}>Actualizar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditUserForm;

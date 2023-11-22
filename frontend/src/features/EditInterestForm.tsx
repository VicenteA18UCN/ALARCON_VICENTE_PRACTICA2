import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Interest from "../app/models/Interest";

interface Props {
  isOpen: boolean;
  initialInterest: Interest;

  handleClickClose: () => void;
  handleClickUpdate: (interest: Interest) => void;
}

const EditInterestForm = ({
  isOpen,
  initialInterest,

  handleClickClose,
  handleClickUpdate,
}: Props) => {
  const [open, setOpen] = React.useState(isOpen);
  const [interest, setInterest] = React.useState<Interest>(initialInterest);

  const handleClientChange = (event: any) => {
    setInterest({ ...interest, [event.target.id]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
    handleClickClose();
  };
  const handleOnSubmit = () => {
    console.log(interest);
    handleClickUpdate(interest);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Editar Interes</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={interest.name}
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
            value={interest.description}
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

export default EditInterestForm;

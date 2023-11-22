import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Tool from "../app/models/Tool";

interface Props {
  isOpen: boolean;
  initialTool: Tool;

  handleClickClose: () => void;
  handleClickUpdate: (tool: Tool) => void;
}

const EditToolForm = ({
  isOpen,
  initialTool,

  handleClickClose,
  handleClickUpdate,
}: Props) => {
  const [open, setOpen] = React.useState(isOpen);
  const [tool, setTool] = React.useState<Tool>(initialTool);

  const handleClientChange = (event: any) => {
    setTool({ ...tool, [event.target.id]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
    handleClickClose();
  };
  const handleOnSubmit = () => {
    console.log(tool);
    handleClickUpdate(tool);
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
            value={tool.name}
            onChange={(e) => handleClientChange(e)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="percentage"
            label="Porcentaje"
            type="text"
            fullWidth
            variant="standard"
            value={tool.percentage}
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

export default EditToolForm;

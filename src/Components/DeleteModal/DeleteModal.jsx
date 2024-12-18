/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GroupButtons } from "../GroupButtons/GroupButtons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, tarea }) {
  const handleBorrar = () => {
    console.log("cancelar");
  };
  const botones = [
    { id: 1, color: "primary", label: "Si", handler: handleBorrar },
    {
      id: 2,
      color: "secondary",
      label: "Cancelar",
      handler: handleClose,
    },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Está seguro de borrar la siguiente tarea?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            - {tarea.titulo}. Materia: {tarea.materia}
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GroupButtons buttons={botones} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

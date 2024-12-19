/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { deleteTarea } from "../../services/deleteTareas";
import ToastNotification from "../ToastNotification/ToastNotification";

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

export default function BasicModal({ open, setModalOpen, handleClose, tarea }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleBorrar = () => {
    setNotification({
      open: true,
      message: "¡Tarea borrada correctamente!",
      severity: "error"
    });
    deleteTarea({
      tarea,
      dispatch,
      setLoading,
      setModalOpen,
    });
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
          {loading && <LinearProgress color="primary" />}
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
      <ToastNotification
        open={notification.open}
        message={notification.message}
        onClose={handleCloseNotification}
        severity={notification.severity}
      />
    </div>
  );
}

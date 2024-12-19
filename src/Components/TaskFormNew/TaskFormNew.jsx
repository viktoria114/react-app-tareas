import { Avatar, Button, Card, Grid2, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useFormNew } from "../../hooks/useFormNew";
import { FormFields } from "../FormFields/FormFields";
import ToastNotification from "../ToastNotification/ToastNotification";
import { useState } from "react";

export const TaskFormNew = () => {
  const { taskForm, handleChange, handleSubmit, handleLimpiar } = useFormNew();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  

  const handleAddTask = async () => {
    await handleSubmit();
    setNotification({
      open: true,
      message: "¡Tarea añadida correctamente!",
      severity: "success"
    });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Card style={{ maxWidth: "543px", width: "100%", alignSelf: "center" }}>
      <Grid2
        container
        spacing={3}
        sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
      >
        <Grid2
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Avatar>
            <ModeEditIcon />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Nueva Tarea
          </Typography>
        </Grid2>

        <FormFields handleChange={handleChange} taskForm={taskForm} />

        <Grid2
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            disabled={!taskForm.titulo || !taskForm.materia}
          >
            Agregar
          </Button>
          
          <Button variant="contained" color="secondary" onClick={handleLimpiar}>
            Limpiar
          </Button>
          <ToastNotification
          open={notification.open}
          message={notification.message}
          onClose={handleCloseNotification}
          severity={notification.severity}
        />
        </Grid2>
      </Grid2>
    </Card>
  );
};

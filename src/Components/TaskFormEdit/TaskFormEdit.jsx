import { Avatar, Button, Card, Grid2, LinearProgress, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { FormFields } from "../FormFields/FormFields";
import { useFormEdit } from "../../services/useFormEdit";
import { useParams } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";

export const TaskFormEdit = () => {
  const { id } = useParams(); // Capturamos el parámetro dinámico
  const { taskForm, loading, handleChange, handleSubmit, handleRestaurar, handleCancelar, notification, handleCloseNotification} = useFormEdit(id);

if (loading) {
    return <LinearProgress color="primary" />;
  }

  return (
    <>
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
            Editar Tarea
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
            onClick={handleSubmit}
            disabled={!taskForm.titulo || !taskForm.materia}
          >
            Guardar
          </Button>
          
          <Button variant="contained" color="secondary" onClick={handleRestaurar}>
            Restaurar
          </Button>
          <Button onClick={handleCancelar}>Cancelar</Button>
          
        </Grid2>
        
      </Grid2>
    </Card>
    <ToastNotification
    open={notification.open}
    message={notification.message}
    onClose={handleCloseNotification}
    severity={notification.severity}
  />
  </>
  );
};

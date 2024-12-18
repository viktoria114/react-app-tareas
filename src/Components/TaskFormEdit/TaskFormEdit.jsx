import { Avatar, Button, Card, Grid2, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useForm } from "../../hooks/useForm";
import { FormFields } from "../FormFields/FormFields";
import { useNavigate } from "react-router-dom";

export const TaskFormEdit = () => {
  const { taskForm, handleChange, handleSubmit, handleLimpiar } = useForm();
  const navigate = useNavigate();

  const handleCancelar = () => {
    navigate("/dashboard");
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
          <Button variant="contained" color="secondary" onClick={handleLimpiar}>
            Restaurar
          </Button>
          <Button onClick={handleCancelar}>Cancelar</Button>
        </Grid2>
      </Grid2>
    </Card>
  );
};

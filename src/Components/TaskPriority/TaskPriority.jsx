/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredTasks } from "../../services/getFilteredTasks";
import { TaskTable } from "../TaskTable/TaskTable";
import { Box, LinearProgress, ThemeProvider, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ActualTheme } from "../../services/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TaskPriority = () => {
  const { nivel } = useParams(); // Capturamos el parámetro dinámico
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: tasks,
    loading,
    error,
  } = useSelector((state) => state.filteredTasks);

  const validPriorities = ["alta", "media", "baja"];

  useEffect(() => {
    if (!validPriorities.includes(nivel)) {
      // Si la prioridad no es válida, redirigir a Dashboard
      navigate("/dashboard");
    } else {
      // Si la prioridad es válida, obtener las tareas filtradas
      dispatch(getFilteredTasks({ priority: nivel }));
    }
  }, [nivel, dispatch, navigate]);

  if (loading) {
    return <LinearProgress color="primary" />;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={ActualTheme}>
        <Box
          sx={{
            alignContent: "center",
            margin: "0 auto",
            gap: "12px",
          }}
        >
          <TaskTable tareas={tasks} />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default TaskPriority;

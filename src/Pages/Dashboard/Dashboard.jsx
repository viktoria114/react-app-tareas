import { Box, LinearProgress, ThemeProvider, Typography } from "@mui/material";
import { TaskTable } from "../../Components/TaskTable/TaskTable.jsx";
import { getTareas } from "../../services/getTareas.js";
import { ActualTheme } from "../../services/theme.js";
import { useGetTareas } from "../../hooks/useGetTareas.jsx";
import { baseURL, tareasURL } from "../../App.jsx";

export const Dashboard = () => {
  const { tareas, loading } = useGetTareas(`${baseURL}${tareasURL}`, getTareas);
  
  if (loading) {
    return <LinearProgress color="primary" />;
  }

  if (tareas.length === 0) {
    return (
      <>
      <Typography>No existen tareas!</Typography>
      <Typography>Crea una para comenzar a visualizarlas</Typography>
      </>
    )
  }
  return (
      <ThemeProvider theme={ActualTheme}>
        <Box
          sx={{
            alignContent: "center",
            margin: "0 auto",
            gap: "12px",
          }}
        >
          <TaskTable tareas={tareas} />
        </Box>
      </ThemeProvider>
  );
};

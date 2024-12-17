import { Box, LinearProgress, ThemeProvider } from "@mui/material";
import { TaskTable } from "../../Components/TaskTable/TaskTable.jsx"

import { getTareas } from "../../services/getTareas.js";
import { useGetTareas } from "../../hooks/useGetTareas.jsx"
import { baseURL, tareasURL } from "../../App";
import { ActualTheme } from "../../services/theme.js";

export const Dashboard = () => {
    const { tareas, loading } = useGetTareas(`${baseURL}${tareasURL}`, getTareas);
  
    if (loading) {
      return <LinearProgress color="secondary" />
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
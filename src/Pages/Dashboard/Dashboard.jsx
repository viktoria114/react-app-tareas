import { Box, LinearProgress, ThemeProvider } from "@mui/material";
import { TaskTable } from "../../Components/TaskTable/TaskTable.jsx";
import { getTareas } from "../../services/getTareas.js";
import { ActualTheme } from "../../services/theme.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useGetTareas } from "../../hooks/useGetTareas.jsx";
import { baseURL, tareasURL } from "../../App.jsx";

export const Dashboard = () => {
  const { tareas, loading } = useGetTareas(`${baseURL}${tareasURL}`, getTareas);

  if (loading) {
    return <LinearProgress color="primary" />;
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
          <TaskTable tareas={tareas} />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

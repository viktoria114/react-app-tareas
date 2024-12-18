import { Box } from "@mui/material";
import { TaskFormNew } from "../../Components/TaskFormNew/TaskFormNew";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AddTaskPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          width: "100%",
        }}
      >
        <TaskFormNew />
      </Box>
    </LocalizationProvider>
  );
};

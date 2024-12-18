import { Box } from "@mui/material";
import { TaskFormEdit } from "../../Components/TaskFormEdit/TaskFormEdit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const EditTaskPage = () => {
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
        <TaskFormEdit />
      </Box>
    </LocalizationProvider>
  );
};

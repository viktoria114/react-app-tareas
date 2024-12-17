import { Box } from "@mui/material";
import { TaskForm } from "../../../../../Components/TaskForm/TaskForm";

export const AddTaskPage = () => {

  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "100%",
      }}
    >
      <TaskForm/>
    </Box>
  );
};
import { Box } from "@mui/material";
import { TaskFormNew } from "../../Components/TaskFormNew/TaskFormNew";

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
        <TaskFormNew />
      </Box>
  );
};

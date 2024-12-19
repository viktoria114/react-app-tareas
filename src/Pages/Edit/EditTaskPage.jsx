import { Box } from "@mui/material";
import { TaskFormEdit } from "../../Components/TaskFormEdit/TaskFormEdit";

export const EditTaskPage = () => {
  return (
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
  );
};

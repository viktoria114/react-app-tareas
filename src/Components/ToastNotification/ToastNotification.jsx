/* eslint-disable react/prop-types */
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function ToastNotification({ open, message, onClose, severity }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={onClose}
      autoHideDuration={4000}
      key="bottomright"
    >
      <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export const GroupButtons = ({ buttons }) => {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      {buttons?.map((button) => (
        <Button key={button.id} variant="contained" color={button.color}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};
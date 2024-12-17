/* eslint-disable react/prop-types */
import {
  Box,
  Checkbox,
  Chip,
  Collapse,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const TaskTableBody = ({ tareas }) => {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (id) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia el estado solo para la fila específica
    }));
  };

  const handleEstado = () => {
    console.log("click on checkbox");
    
  }
  return (
    <TableBody>
      {tareas?.map((tarea) => (
        <React.Fragment key={tarea._id}>
          <TableRow
            onMouseOver={() => toggleRow(tarea._id)}
            onMouseOut={() => toggleRow(tarea._id)}
          >
            <TableCell>
              <Checkbox checked={tarea?.completada}
              onClick={handleEstado} />
            </TableCell>
            <TableCell>{tarea.titulo}</TableCell>
            <TableCell>{tarea.materia}</TableCell>
            <TableCell>{tarea.fechaLimite || "Sin fecha límite"}</TableCell>

            <TableCell>
              <Chip
                label={tarea?.prioridad}
                color={
                  {
                    baja: "success",
                    media: "warning",
                    alta: "error",
                  }[tarea?.prioridad] || "default"
                }
                style={{ marginBottom: "10px" }}
              />
            </TableCell>
            <TableCell>{tarea.etiquetas.join(" - ")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openRows[tarea._id]} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography
                    variant="h8"
                    gutterBottom
                    component="div"
                    marginLeft={"10%"}
                  >
                    Descripción: {tarea?.descripcion || "Sin Descripción"}
                  </Typography>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
};

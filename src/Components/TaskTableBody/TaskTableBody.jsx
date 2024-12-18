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
import { GroupButtons } from "../GroupButtons/GroupButtons";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicModal from "../DeleteModal/DeleteModal";
import { useNavigate } from "react-router-dom";

export const TaskTableBody = ({ tareas }) => {
  const [openRows, setOpenRows] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  const toggleRow = (id) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia el estado solo para la fila específica
    }));
  };

  const handleEstado = () => {
    console.log("click on checkbox");
  };

  const handleEditar = (tareaId) => {
    navigate(`/edit/`); // Redirige a la página con el ID de la tarea
  };

  const handleOpenModal = (tarea) => {
    setSelectedTask(tarea); // Asigna la tarea seleccionada
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null); // Limpia la tarea seleccionada al cerrar
  };
  const botones = [
    {
      id: 1,
      color: "secondary",
      label: <ModeEditIcon />,
      handler: (tarea) => handleEditar(tarea._id),
    },
    {
      id: 2,
      color: "error",
      label: <DeleteIcon />,
      handler: (tarea) => handleOpenModal(tarea),
    },
  ];

  return (
    <TableBody>
      {tareas?.map((tarea) => (
        <React.Fragment key={tarea._id}>
          <TableRow
            onMouseOver={() => toggleRow(tarea._id)}
            onMouseOut={() => toggleRow(tarea._id)}
          >
            <TableCell>
              <Checkbox checked={tarea?.completada} onClick={handleEstado} />
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
            <TableCell>
              <GroupButtons
                buttons={botones.map((button) => ({
                  ...button,
                  handler:
                    button.id === 2
                      ? () => button.handler(tarea) // Pasar tarea como argumento al botón borrar
                      : button.handler,
                }))}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
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
      {selectedTask && (
        <BasicModal
          open={modalOpen}
          handleClose={handleCloseModal}
          tarea={selectedTask} // Pasar la tarea seleccionada como prop
        />
      )}
    </TableBody>
  );
};

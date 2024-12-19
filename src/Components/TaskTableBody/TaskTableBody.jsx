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
import React from "react";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicModal from "../DeleteModal/DeleteModal";
import ToastNotification from "../ToastNotification/ToastNotification";
import { useTaskTableBody } from "../../hooks/useTaskTableBody";
import dayjs from "dayjs";

export const TaskTableBody = ({ tareas }) => {
  const {
    notification,
    handleEstado,
    handleEditar,
    handleOpenModal,
    handleCloseModal,
    modalOpen,
    setModalOpen,
    selectedTask,
    handleCloseNotification,
    toggleRow,
    openRows
  } = useTaskTableBody({});

  function toInputFormat(dateString) {
    if (!dateString) return ""; // Manejar fechas vacías
    const date = dayjs(dateString);
    return date.isValid() ? date.format("DD-MM-YYYY HH:mm") : "";
  }
  
  const botones = [
    {
      id: 1,
      color: "secondary",
      label: <ModeEditIcon />,
      handler: (tarea) => handleEditar(tarea),
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
              <Checkbox
                checked={tarea?.completada}
                onClick={() => handleEstado(tarea)}
              />
            </TableCell>
            <TableCell>{tarea.titulo}</TableCell>
            <TableCell>{tarea.materia}</TableCell>
            <TableCell>{toInputFormat(tarea.fechaLimite) || "Sin fecha límite"}</TableCell>

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
                  handler: () => button.handler(tarea), // Pasar tarea como argumento al botón borrar
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
          setModalOpen={setModalOpen}
          handleClose={handleCloseModal}
          tarea={selectedTask} // Pasar la tarea seleccionada como prop
        />
      )}
      <ToastNotification
        open={notification.open}
        message={notification.message}
        onClose={handleCloseNotification}
        severity={notification.severity}
      />
    </TableBody>
  );
};

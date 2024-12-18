/* eslint-disable react/prop-types */
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { TaskTableBody } from "../TaskTableBody/TaskTableBody";
import { ActualTheme } from "../../services/theme";

export const TaskTable = ({ tareas }) => {
  return (
    <ThemeProvider theme={ActualTheme}>
      <Box component="main" sx={{ flexGrow: 1, alignSelf: "center" }}>
        <Toolbar />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableContainer
              style={{
                width: "80%",
                maxWidth: "1200px",
                minWidth: "600px",
                margin: "0 auto",
                backgroundColor: "white",
              }}
            >
              <Table>
                <TableHead
                  sx={{ backgroundColor: ActualTheme.palette.primary.main }}
                >
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell />

                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "white" }}
                    >
                      Título
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>Materia</TableCell>
                    <TableCell sx={{ color: "white" }}>Fecha Límite</TableCell>
                    <TableCell sx={{ color: "white" }}>Prioridad</TableCell>
                    <TableCell sx={{ color: "white" }}>Etiquetas</TableCell>
                    <TableCell sx={{ color: "white" }}>Acciones</TableCell>
                  </TableRow>
                </TableHead>

                <TaskTableBody tareas={tareas} />
              </Table>
            </TableContainer>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

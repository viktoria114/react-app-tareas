/* eslint-disable react/prop-types */
import {
    FormControl,
    Grid2,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { DateTimePicker } from "@mui/x-date-pickers";
  import { LocalizationProvider } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import dayjs from "dayjs";

export const FormFields = ({handleChange, taskForm}) => {
    return ( 
        <>
<Grid2
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            flexGrow: 1,
          }}
        >
          <Grid2 item xs={3}>
            <TextField
              sx={{ minWidth: "261px" }}
              fullWidth
              variant="outlined"
              label="Titulo"
              name="titulo"
              value={taskForm?.titulo}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Materia"
              name="materia"
              value={taskForm?.materia}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
        </Grid2>
                <Grid2
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  flexGrow: 1,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Fecha Límite"
                    value={dayjs(taskForm.fechaLimite)}
                    onChange={(e) =>
                      handleChange({ target: { name: "fechaLimite", value: e } })
                    }
                    name="fechaLimite"
                  />
                </LocalizationProvider>
                <Grid2>
                  <FormControl fullWidth>
                    <InputLabel>Prioridad</InputLabel>
                    <Select
                      variant="outlined"
                      value={taskForm.prioridad}
                      name="prioridad"
                      label="Prioridad"
                      onChange={handleChange}
                      sx={{ minWidth: "227px" }}
                    >
                      <MenuItem value={"baja"}>baja</MenuItem>
                      <MenuItem value={"media"}>media</MenuItem>
                      <MenuItem value={"alta"}>alta</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
              </Grid2>
              <Grid2 item xs={3} sx={{ maxWidth: "500px" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Descripción"
                  name="descripcion"
                  value={taskForm.descripcion}
                  onChange={(e) => handleChange(e)}
                />
              </Grid2>
              <Grid2 item xs={3} sx={{ maxWidth: "500px" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Etiquetas"
                  name="etiquetas"
                  value={taskForm.etiquetas}
                  onChange={(e) => handleChange(e)}
                />
              </Grid2>
              </>
     );
}
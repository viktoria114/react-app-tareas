import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const getFilteredTasks = createAsyncThunk(
  "filteredTasks/getFilteredTasks",
  async (payload, thunkAPI) => {
    try {
      const { priority } = payload; // Se espera siempre un valor válido
      const url = `${baseURL}${tareasURL}/prioridad/${priority}`; // URL directa

      const response = await axios.get(url); // Petición al backend
      console.log("Respuesta del servidor:", response);
      return response.data;
    } catch (error) {
      console.error("Error al obtener tareas filtradas:", error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

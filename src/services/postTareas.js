import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const postTareas = async (taskForm) => {
  try {
    const response = await axios.post(
      `${baseURL}${tareasURL}`,
      {
        titulo: taskForm.titulo,
        materia: taskForm.materia,
        descripcion: taskForm.descripcion,
        fechaLimite: taskForm.fechaLimite,
        completada: taskForm.completada,
        prioridad: taskForm.prioridad,
        etiquetas: taskForm.etiquetas,
      }
  
    );
    console.log("Respuesta del servidor:", response);
  } catch (error) {
    console.error(
      "Error en la solicitud:",
      error.response?.data || error.message
    );
  }
};

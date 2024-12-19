import axios from "axios";

export const putTareas = async (url,taskForm) => {
  try {
    const response = await axios.put(
      url,
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
    return response.data
  } catch (error) {
    console.error(
      "Error en la solicitud:",
      error.response?.data || error.message
    );
  }
};

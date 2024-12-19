import axios from "axios";
import { setTasks } from "../store/slices/TaskSlice/TaskSlice";
import { getFilteredTasks } from "../services/getFilteredTasks";
import { getTareas } from "../services/getTareas";
import { baseURL, tareasURL } from "../App";

export const deleteTarea = async ({ tarea, dispatch, setLoading, setModalOpen }) => {
  try {
    setLoading(true);
    await axios.delete(`${baseURL}${tareasURL}/${tarea._id}`);

    // Actualiza el estado global con las tareas filtradas y completas
    dispatch(getFilteredTasks({ priority: tarea.prioridad }));
    const tareasActualizadas = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTasks(tareasActualizadas));

    setLoading(false);
    setModalOpen(false);
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    setLoading(false);
  }
};

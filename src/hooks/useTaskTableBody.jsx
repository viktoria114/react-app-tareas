import { baseURL, completar, tareasURL } from "../App";
import { putTareas } from "../services/putTareas";
import { useGetTareas } from "./useGetTareas";
import { getTareas } from "../services/getTareas";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFilteredTasks } from "../services/getFilteredTasks";
import { useDispatch } from "react-redux";

export const useTaskTableBody = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openRows, setOpenRows] = useState({});
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const dispatch = useDispatch();
    const { refetch } = useGetTareas(`${baseURL}${tareasURL}`, getTareas);

  const handleEstado = async (tarea) => {
    const url = `${baseURL}${tareasURL}/${tarea._id}${completar}`;
    try {
      await putTareas(url, { ...tarea, completada: !tarea.completada });
      setNotification({
        open: true,
        message:  `¡Tarea ${tarea.completada ? "marcada como incompleta" : "completada"}!`,
        severity: "info"
      });
      refetch();
      setTimeout(() => {
        dispatch(getFilteredTasks({ priority: tarea.prioridad }));
      }, 1500);
      console.log("Estado actualizado para:", tarea._id);
      
      
     
      
    } catch (error) {
      console.error("Error al completar la tarea:", error);
      setNotification({
        open: true,
        message: "Hubo un error al actualizar la tarea.", 
        severity: "error"
      });
    }
  };

  const handleEditar = (tarea) => {
    navigate(`/edit/${tarea._id}`); // Redirige a la página con el ID de la tarea
  };

  const handleOpenModal = (tarea) => {
    setSelectedTask(tarea); // Asigna la tarea seleccionada
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null); // Limpia la tarea seleccionada al cerrar
  };
  
  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const toggleRow = (id) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia el estado solo para la fila específica
    }));
  };


      return({notification, handleEstado, handleEditar, handleOpenModal, handleCloseModal, modalOpen, setModalOpen, selectedTask, handleCloseNotification, toggleRow, openRows})
}
import { useNavigate } from "react-router-dom";
import { baseURL, tareasURL } from "../App";
import { getTareas } from "./getTareas";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { putTareas } from "./putTareas";

export const useFormEdit = (id) => {
  const navigate = useNavigate();
  const url = `${baseURL}${tareasURL}/${id}`

  // Estados iniciales
  const [taskForm, setTaskForm] = useState({
    titulo: "",
    materia: "",
    descripcion: "",
    fechaLimite: "",
    prioridad: "media",
    etiquetas: "",
  });

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    position: { vertical: "top", horizontal: "center" },
  });

  // Obtener datos de la tarea
  const { data: task, loading } = useFetch(url, getTareas);

  // Actualizar `taskForm` cuando la tarea se cargue
  useEffect(() => {
    if (task) {
      setTaskForm({
        titulo: task.titulo,
        materia: task.materia,
        descripcion: task.descripcion || "",
        fechaLimite: task.fechaLimite || "",
        prioridad: task.prioridad || "media",
        etiquetas: task.etiquetas || "",
      });
    }
  }, [task]);

  // Manejadores
  const handleRestaurar = () => {
    setTaskForm({
      titulo: task.titulo,
      materia: task.materia,
      descripcion: task.descripcion || "",
      fechaLimite: task.fechaLimite || "",
      prioridad: task.prioridad || "media",
      etiquetas: task.etiquetas || "",
    });
  };

  const handleCancelar = () => navigate("/dashboard");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await putTareas(url,taskForm);
      setNotification({
        open: true,
        message: "¡Tarea editada correctamente!",
        severity: "success"
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.log(error);
      
      setNotification({
        open: true,
        message: "Error al editar la tarea.",
        severity: "error"
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  // Valores retornados de manera consistente
  return {
    taskForm,
    loading,
    handleChange,
    handleSubmit,
    handleRestaurar,
    handleCancelar,
    notification,
    handleCloseNotification,
  };
};

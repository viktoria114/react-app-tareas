import { useState } from "react";
import { postTareas } from "../services/postTareas";

export const useForm = () => {
  const [taskForm, setTaskForm] = useState({
    titulo: "",
      materia: "",
      descripcion: "",
      fechaLimite: "",
      completada: false,
      prioridad: "media",
      etiquetas: "",
  });

  const handleChange = (e) => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
   
    const sendData = await postTareas(taskForm);
    console.log(sendData);
    setTaskForm({
        titulo: "",
        materia: "",
        descripcion: "",
        fechaLimite: "",
        completada: false,
        prioridad: "media",
        etiquetas: "",
    });
  };

  const handleLimpiar = () => {
    setTaskForm({
        titulo: "",
        materia: "",
        descripcion: "",
        fechaLimite: "",
        completada: false,
        prioridad: "media",
        etiquetas: "",
    });
  }

  return { taskForm, handleChange, handleSubmit, handleLimpiar };
};
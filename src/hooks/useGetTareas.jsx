/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../store/slices/TaskSlice/TaskSlice";

export const useGetTareas = (url, getData) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tasks.tasks);

  const fetchData = async () => {
    try {
      const response = await getData(url);
      dispatch(setTasks(response)); // Actualiza Redux con las tareas
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]); // Re-renderiza si la URL cambia

  return { tareas, loading, refetch: fetchData };
};

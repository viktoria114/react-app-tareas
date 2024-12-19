/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredTasks } from "../services/getFilteredTasks";
import { setTasks } from "../store/slices/TaskSlice/TaskSlice";

export const useFilters = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.filteredTasks);

  const [filterPriority, setFilterPriority] = useState(""); // Estado para prioridad

  useEffect(() => {
    dispatch(getFilteredTasks({ priority: filterPriority }));
  }, [filterPriority]);

  // Actualiza las tareas en Redux una vez filtradas
  useEffect(() => {
    if (data && !loading && !error) {
      dispatch(setTasks(data));
    }
  }, [data, loading]);

  // Función para cambiar filtro de prioridad
  const handleFilterByPriority = (priority) => {
    setFilterPriority(priority);
  };

  return {
    handleFilterByPriority,
    loading,
  };
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../store/slices/TaskSlice/TaskSlice";

export const useGetTareas = (url, getData) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tasks.tasks);

  const resolve = async () => {
    const response = await getData(url);
    dispatch(setTasks(response));
    setLoading(false);
  };

  useEffect(() => {
    resolve();
  }, [url, getData]);

  return { tareas, loading };
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useGetTareas = (url, getData) => {
const [tareas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const resolve = async () => {
    
    const response = await getData(url);
    
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    resolve();
  }, [url, getData]);

  return { tareas, loading };
};
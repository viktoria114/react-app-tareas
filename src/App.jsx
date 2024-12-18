/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PersistentDrawerLeft from "./Components/AppBar/AppBar";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { AddTaskPage } from "./Pages/Add/AddTaskPage";

import Login from "./Components/Login/Login";
import { EditTaskPage } from "./Pages/Edit/EditTaskPage";
import TaskPriority from "./Components/TaskPriority/TaskPriority";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const tareasURL = import.meta.env.VITE_TAREAS;
export const filters = import.meta.env.VITE_GET_TAREAS_PRIORIDAD;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route element={<PersistentDrawerLeft />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/prioridad/:nivel"
            element={<TaskPriority />}
          />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit" element={<EditTaskPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

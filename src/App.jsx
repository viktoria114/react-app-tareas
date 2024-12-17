import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PersistentDrawerLeft from "./Components/AppBar/AppBar";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { AddTaskPage } from "./Pages/Add/src/Pages/Add/AddTaskPage";
import Login from "./Components/Login/Login";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const tareasURL = import.meta.env.VITE_TAREAS;

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Login/>}/>
        <Route element={<PersistentDrawerLeft/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddTaskPage/>}/>
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

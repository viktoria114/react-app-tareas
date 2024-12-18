import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import EmergencyIcon from "@mui/icons-material/Emergency";
import { NavLink } from "react-router-dom";

export const MenuItemsAppBar = () => {
  const menuItems = [
    { id: 1, icon: <AddTaskIcon />, text: "Agregar una tarea", path: "/add" },
    {
      id: 2,
      icon: <AssignmentIcon />,
      text: "Listado de tareas",
      path: "/dashboard",
    },
  ];

  const menuPrioridad = [
    {
      icon: <PriorityHighIcon />,
      text: "Alta",
      path: "/dashboard/prioridad/alta",
    },
    {
      icon: <EmergencyIcon />,
      text: "Media",
      path: "/dashboard/prioridad/media",
    },
    {
      icon: <LowPriorityIcon />,
      text: "Baja",
      path: "/dashboard/prioridad/baja",
    },
  ];

  return (
    <>
      <List>
        {menuItems.map(({ id, icon, text, path }) => (
          <>
            <NavLink
              key={id}
              to={path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>Prioridades</ListItem>
        {menuPrioridad.map(({ icon, text, path }, index) => (
          <NavLink
            key={index}
            to={path}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
};

export default MenuItemsAppBar;

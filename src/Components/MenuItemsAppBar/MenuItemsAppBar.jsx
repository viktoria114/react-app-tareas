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
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import EmergencyIcon from "@mui/icons-material/Emergency";
import { NavLink } from "react-router-dom";

export const MenuItemsAppBar = () => {
  const menuItems = [
    { id: 1, icon: <SearchIcon />, text: "Buscar una tarea", path: "/search" },
    { id: 2, icon: <AddTaskIcon />, text: "Agregar una tarea", path: "/add" },
    {
      id: 3,
      icon: <AssignmentIcon />,
      text: "Listado de tareas",
      path: "/dashboard",
    },
  ];

  const menuPrioridad = [
    { icon: <PriorityHighIcon />, text: "Alta" },
    { icon: <EmergencyIcon />, text: "Media" },
    { icon: <LowPriorityIcon />, text: "Baja" },
  ];

  return (
    <>
      <List>
        {menuItems.map(({ id, icon, text, path }) => (
          <>
            <NavLink key={id} to={path} style={{ textDecoration: "none", color: "black" }}>
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
        {menuPrioridad.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MenuItemsAppBar;

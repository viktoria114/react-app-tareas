To-do List!

Una app para administrar tus tareas, alta, baja y modificacion.
Utiliza endpoints de negocio tales como:
- Completar tarea
- Filtrar por prioridades

Encontramos 4 paginas principales:
- Login
- Dashboard
- Add / Edit
- Dashboard con filtros

Para iniciar utiliza:
usuario: admin
contraseña: admin

El archivo .env se compone de:
VITE_BASE_URL = https://api-tareas-vik-version4.vercel.app/api

VITE_TAREAS = /tareas

VITE_COMPLETAR_TAREAS = /completar

VITE_GET_TAREAS_PRIORIDAD = /prioridad/:nivel
#
#
#
La estructura general del codigo es:
App.js
|
|- /                            Login
|-                              <PersistentDrawerLeft>
|- /dashboard                   dashboard
|- /dashboard/prioridad/:nivel  TaskPriority
|- /add                         AddTaskPage
|- /edit/:id                    EditTaskPage
|-                              </PersistentDrawerLeft>

#
PersistentDrawerLeft -> AppBar, MenuItemsAppBar, useAppBar

dashboard -> useGetTareas, getTareas, TaskTable -> TaskTableBody, useTaskTableBody, putTareas ->  DeleteModal, deleteTareas, Group Buttons -> Toast Notification

TaskPriority -> TaskTable -> TaskTableBody, useTaskTableBody, getFilteredTasks

AddTaskPage -> TaskFormNew, postTareas useFormNew -> FormFields -> Toast Notification

EditTaskPage -> TaskFormEdit, putTareas, useFormEdit, useFetch -> FormFields -> Toast Notification

theme -> para definir colores en todo el codigo
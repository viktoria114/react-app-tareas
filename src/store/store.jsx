import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/TaskSlice/TaskSlice";
import filteredTasks from "./slices/FilteredTaskSlice/FilteredTasksSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filteredTasks: filteredTasks,
  },
});

export default store;

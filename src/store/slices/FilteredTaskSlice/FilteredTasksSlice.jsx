import { createSlice } from "@reduxjs/toolkit";
import { getFilteredTasks } from "../../../services/getFilteredTasks";

const filteredTasks = createSlice({
  name: "filteredTasks",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredTasks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getFilteredTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default filteredTasks.reducer;

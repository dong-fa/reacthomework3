import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  user: "",
  title: "",
  body: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;

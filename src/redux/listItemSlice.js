import { createSlice } from "@reduxjs/toolkit";


export const listSlice = createSlice({
  name: "list",
  initialState: {
    val: 0,
  },
  reducers: {
    updateList: (state, action) => {
      state.val = action.payload;
    },
  },
});

export const {updateList} = listSlice.actions

export default listSlice.reducer

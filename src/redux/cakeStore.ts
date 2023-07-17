import { CakeItem, DataCake } from "@/interfaces/cakes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  cakeList: DataCake;
}

const initialState: CounterState = {
  cakeList: {
    current_page: 0,
    total_page: 0,
    items: [],
  },
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setCakeList: (state, action: PayloadAction<DataCake>) => {
      console.log(action.payload);
      
      state.cakeList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCakeList } = cakeSlice.actions;

const cakeReducer = cakeSlice.reducer;
export default cakeReducer;

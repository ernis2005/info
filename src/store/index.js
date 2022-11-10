import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, fetchTodos,  } from "./reducers/pizza.reducers";
export const store = configureStore({
  reducer: {
    couter: counterSlice.reducer,
    todos :fetchTodos.reducer,
   
  },
});

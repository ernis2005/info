import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
///  "https://restcountries.com/v2/all?populate=*"
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const respose = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      console.log(respose);
      
      let data2 = respose.data;
      return data2;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);
export const addNeweTodo = createAsyncThunk(
  'tosos/addNeweTodo',
  async function (text, {rejectWithValue, dispatch}) {
    try {
        const todo = {
            title: text,
            userId: 1,
            completed: false,
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        if (!response.ok) {
            throw new Error('Can\'t add task. Server error.');
        }

        const data = await response.json();
        dispatch(addTodo(data));

    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
)
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
      })
      console.log(response);
      if (!response.ok) {
        throw new Error('server error ')
      }
      dispatch(removeTodo({id}));
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }

)

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: null,
    todos: [],
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    addValue: (state, action) => {
      state.value *= action.payload;
    },
    removeValue: (state, action) => {
      state.value -= action.payload;
    },
    hello: (state) => {
      state.value = 0;
    },
    p: (state, action) => {
      state.value += action.payload;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    }
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loding ";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.pending]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const { increment, decrement, addValue, removeValue, hello, p, error, removeTodo, addTodo } =
  counterSlice.actions;

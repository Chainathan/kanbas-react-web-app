import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./a4/ReduxExamples/CounterRedux/counterReducer";
import counter2Reducer from "./a4/ReduxExamples/CounterRedux/counter2Reducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./a4/ReduxExamples/CounterRedux/AddRedux/addReducer";

const store = configureStore({
  reducer: {
    counterReducer,
    addReducer,
    counter2Reducer,
    helloReducer,
    todosReducer,
  },
});

export default store;

import { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import todoReducer, { initialTodoState } from '../reducers/todoReducer';
import axios from '../config/axios';
import { DELETE_TODO, LOAD_TODO } from '../actions/todoAction';
const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  useEffect(() => {
    axios
      .get('/todos')
      .then((res) => {
        dispatch({ type: LOAD_TODO, payload: { todos: res.data.todos } });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
export default TodoContextProvider;
export { TodoContext };

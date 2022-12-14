import {
  CREATE_TODO,
  DELETE_TODO,
  LOAD_TODO,
  UPDATE_TODO,
} from '../actions/todoAction';

const initialTodoState = {
  todos: [],
  renderTodos: [],
  searchText: '',
  searchStatus: null,
  sort: '',
  pageLimit: 10,
  currentPage: 1,
};
function todoReducer(state, action) {
  switch (action.type) {
    case LOAD_TODO: {
      const todos = action.payload.todos;
      // const { pageLimit, currentPage } = state;
      // const renderTodos = todos.slice(
      //   (currentPage - 1) * pageLimit,
      //   currentPage * pageLimit
      // );
      return { ...state, todos };
    }
    case DELETE_TODO: {
      console.log(action.payload);
      const todos = state.todos.filter((item) => item.id !== action.payload.id);
      return { ...state, todos };
    }
    case CREATE_TODO: {
      const todos = [action.payload.todo, ...state.todos];
      return { ...state, todos };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          action.payload.todo.id === item.id ? action.payload.todo : item
        ),
      };
    }

    default:
      return state;
  }
}

export default todoReducer;
export { initialTodoState };

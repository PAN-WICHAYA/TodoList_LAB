import { useContext } from 'react';
import { CREATE_TODO } from './actions/todoAction';
import TodoContainer from './component/TodoContainer';
import TodoForm from './component/TodoForm';
import axios from './config/axios';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const { dispatch } = useContext(TodoContext);
  const createTodo = (title) => {
    axios
      .post('/todos', { title, completed: false })
      .then((res) => {
        dispatch({ type: CREATE_TODO, payload: { todo: res.data.todo } });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        {/* ********** ADD TODO FORM ********** */}
        <TodoForm onSubmit={createTodo} />
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <TodoContainer />
    </div>
  );
}

export default App;

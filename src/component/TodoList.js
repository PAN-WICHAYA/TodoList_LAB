import TodoItem from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';

function TodoList() {
  const ctx = useContext(TodoContext);
  return (
    <ul className='list-group my-2'>
      {ctx.state.todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;

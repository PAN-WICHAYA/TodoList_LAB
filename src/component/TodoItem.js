import TodoContent from './TodoContent';

function TodoItem(props) {
  return (
    <li
      className={`list-group-item p-3 callout-${
        props.item.completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent item={props.item} />
    </li>
  );
}

export default TodoItem;

import TodoContainer from './component/TodoContainer';
import TodoForm from './component/TodoForm';
import Pagination from './component/Pagination';
import TodoList from './component/TodoList';
function App() {
  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        {/* ********** ADD TODO FORM ********** */}
        <TodoForm />
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <TodoContainer />
      <TodoList />
      {/* ********** SEARCH TEXT ********** */}

      {/* ********** END SEARCH TEXT ********** */}

      {/* ********** SEARCH STATUS ********** */}

      {/* ********** END SEARCH STATUS ********** */}

      {/* ********** TODO LIST ********** */}

      {/* ********** END TODO LIST ********** */}

      <div className='my-2 d-flex justify-content-between align-items-center'>
        <small className='text-muted'>Showing 6 to 10 of 12 entries</small>
        {/* ********** PAGINATION ********** */}
        <Pagination />
        {/* ********** END PAGINATION ********** */}
      </div>
    </div>
  );
}

export default App;

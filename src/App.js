import TodoContainer from './component/TodoContainer';
import TodoForm from './component/TodoForm';
function App() {
  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        {/* ********** ADD TODO FORM ********** */}
        <TodoForm />
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <TodoContainer />
    </div>
  );
}

export default App;

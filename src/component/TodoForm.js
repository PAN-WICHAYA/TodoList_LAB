import { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn btn-primary'>
          <i className='fa-solid fa-check' />
        </button>
        <button className='btn btn-outline-secondary' type='button'>
          <i className='fa-solid fa-xmark' />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

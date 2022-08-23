import { Fragment } from 'react';
import SearchStatus from './SearchStatus';
import SearchText from './SearchText';
import PageLimit from './PageLimit';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoContainer() {
  return (
    <Fragment>
      <div className='my-2 d-flex gap-3'>
        <SearchText />
        <SearchStatus />
      </div>

      <div className='my-2 d-flex justify-content-between'>
        <PageLimit />
        <Sort />
      </div>
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
    </Fragment>
  );
}

export default TodoContainer;

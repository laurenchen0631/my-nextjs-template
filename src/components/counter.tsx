import {useSelector, useDispatch} from 'react-redux';

import {decrementCount, incrementCount, resetCount} from 'model/counter/CounterAction';
import {getCounter} from 'model/counter/CounterSelector';
import {AppDispatch} from 'model/helper';

function Counter(): JSX.Element {
  const count = useSelector(getCounter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button
        className="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
        onClick={() => dispatch(incrementCount())}>
        +1
      </button>
      <button
        className="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
        onClick={() => dispatch(decrementCount())}>
        -1
      </button>
      <button
        className="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
        onClick={() => dispatch(resetCount())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

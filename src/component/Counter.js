import { useDispatch, useSelector } from "react-redux";
import { CounterDecrement, CounterIncrement } from "../store/redux-constant";
import './Counter.css';

const Counter = () => {
  const currentCounterState = useSelector((counterStore) => counterStore);

  const dispatch = useDispatch();

  const { counter, status } = currentCounterState;

  const incrementCounter = () => {
    dispatch({ type: CounterIncrement });
  };

  const decrementCounter = () => {
    dispatch({ type: CounterDecrement });
  };

  const currentClass = status === CounterDecrement ? 'decrement' : status === CounterIncrement ? 'increment' : 'default';

  return (
    <div>
      <h1> Counter Example with React-Redux </h1>

      <div>
        <span className={currentClass}> Counter: {status} {counter}  </span>
      </div>

      <div>
        <button type="button" onClick={incrementCounter}>
          Increment
        </button>
        <button type="button" onClick={decrementCounter}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

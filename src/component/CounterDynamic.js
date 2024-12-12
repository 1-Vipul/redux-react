import { useDispatch, useSelector } from "react-redux";
import { CounterDecrement, CounterDecrementDynamic, CounterIncrement, CounterIncrementDynamic } from "../store/redux-constant";
import './Counter.css';
import { useState } from "react";

const CounterDynamic = () => {
  const currentCounterState = useSelector((counterStore) => counterStore);

  const[inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const { counter, status } = currentCounterState;

  const incrementCounterDynamic = () => {
    dispatch({ type: CounterIncrementDynamic, value:inputValue });
  };

  const decrementCounterDynamic = () => {
    dispatch({ type: CounterDecrementDynamic, value:inputValue  });
  };

  const currentClass = status === CounterDecrementDynamic ? 'decrement' : status === CounterIncrementDynamic ? 'increment' : 'default';

  return (
    <div>
      <h1> Counter Example with React-Redux Dynamic</h1>

      <div>
        <span className={currentClass}> Counter: {status} {counter}  </span><br/>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(parseInt(e.target.value))}/>
      </div>
      
      <div>
        <button type="button" onClick={incrementCounterDynamic}>
          Increment
        </button>
        <button type="button" onClick={decrementCounterDynamic}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterDynamic;

import { createStore } from "redux";
import { CounterDecrement, CounterDecrementDynamic, CounterIncrement, CounterIncrementDynamic } from "./redux-constant";


const initalState = {counter:0, status: "Start"};

const reducerFun = (state=initalState, action) => {
  switch (action.type) {
    case CounterIncrement:
      return{
          ...state,
          counter: state.counter + 1,
          status: action.type
      };
    case CounterDecrement:
      return{
        ...state,
        counter: state.counter - 1,
        status: action.type
      };
      case CounterIncrementDynamic:
      return{
          ...state,
          counter: state.counter + action.value,
          status: action.type
      };
      case CounterDecrementDynamic:
      return{
          ...state,
          counter: state.counter - action.value,
          status: action.type
      };
    default:
      return state;
  }
};

const counterStore = createStore(reducerFun);


export default counterStore;

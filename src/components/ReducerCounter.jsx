import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state
  }
}

function ReducerCounter() {

  const [counter, dispatch] = useReducer(reducer, 0)

  const handleIncrement = () => {
    dispatch({ type: 'increment'})
  }
  
  const handleDecrement = () => {
    dispatch({ type: 'decrement'})
  }

  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
    </div>
  )

}

export default ReducerCounter
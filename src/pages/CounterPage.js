import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const CHANGE_ADD_TO_VALUE = 'change-value-to-add'
const ADD_TO_COUNTER = 'add-to-counter'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case ADD_TO_COUNTER:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    case CHANGE_ADD_TO_VALUE:
      return {
        ...state,
        valueToAdd: action.payload
      }
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_COUNTER,
    })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0
    dispatch({
      type: CHANGE_ADD_TO_VALUE,
      payload: value
    })
  }

  return <div>
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </Panel>
    <form onSubmit={handleSubmit}>
      <label>Add a lot!</label>
      <input
        type="number"
        className="p-1 m-3 bg-gray-50 border border-gray-300"
        value={state.valueToAdd || ""}
        onChange={handleChange}>
      </input>
      <Button>Add it!</Button>
    </form>
  </div>
}

export default CounterPage
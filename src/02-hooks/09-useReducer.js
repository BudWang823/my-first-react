import React, { useReducer } from 'react'
const reducer = (preState, actions) => {
  console.log(preState, actions)
  const newList = { ...preState }
  switch (actions.type) {
    case 'wz-numus':
      newList.count--
      return newList;

    case 'wz-add':
      newList.count++
      return newList
    default:
      return preState
  }
}
const initialArg = {
  count: 0
} 
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'wz-numus'
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: 'wz-add'
        })
      }}>+</button>
    </div>
  )
}

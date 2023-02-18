import React, { createContext, useReducer, useContext } from 'react'
const reducer = (preState, action) => {
  console.log(preState, action)
  const newList = { ...preState }
  switch (action.type) {
    case 'add-a':
      newList.a++
      return newList;

    case 'add-b':
      newList.b++
      return newList
    default:
      return preState
  }
}
const initialArg = {
  a: 0,
  b: 10
}
const GlobalContext = createContext()
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <Child1></Child1>
      <Child2></Child2>
      <Child3></Child3>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const {dispatch} = useContext(GlobalContext);
  return <div>
    <button onClick={() => {
      dispatch({
        type: 'add-a'
      })
    }}>add  a</button>

    <button onClick={() => {
      dispatch({
        type: 'add-b'
      })
    }}>add b</button>
  </div>
}
function Child2() {
  const {state} = useContext(GlobalContext);
  return <div>
    a:{state.a}
  </div>
}

function Child3() {
  const {state} = useContext(GlobalContext);
  return <div>
    b:{state.b}
  </div>
}

import React, { useCallback, useState } from 'react'
/**
 * useCallback 返回一个记忆函数  会保存第二个参数数组中声明的变量
 * 
 */
export default function App() {
  const [count, setCount] = useState(0);
  let myCount = 0
  const handleClick = useCallback(() => {
    setCount(count + 1)
    
  },[count])
  const handleRename = useCallback(() => {
      setCount(count + 1)
    },[count]);
  return (
    <div>
      <div>
        <br />
        <button onClick={() => handleRename()}> changename</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => handleClick()}>addasdfadf</button>
      <div >{count}</div>
    </div>
  )
}

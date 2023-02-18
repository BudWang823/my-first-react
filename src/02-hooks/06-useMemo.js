import React, { useCallback, useMemo, useState } from 'react'
/**
 * useCallback 返回一个记忆函数
 * useMemo 返回函数执行的结果
 * 
 */
export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(100);
  const handleAddA = useCallback(() => {
    setNumA(numA + 1)
  }, [numA]);
  const handleAddB = useCallback(() => {
    setNumB(numB + 100)
  }, [numB]);
  const sumNumber = useMemo(() => {
    return numA + numB
  }, [numB, numA]);
  return (
    <div>
      <div>
        <br />
        <button onClick={() => handleAddA()}> 控制a++</button>
        <button onClick={() => handleAddB()}>控制b++</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div >A: {numA}</div>
      <div >B: {numB}</div>
      <div >SUM: {sumNumber}</div>
    </div>
  )
}

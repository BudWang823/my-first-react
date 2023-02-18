import React, { useState } from 'react'
/**
 * 函数式组件每次render都会重新执行APP  使用 hooks  可以将所声明的东西缓存下来
 * @returns 
 */
export default function App() {
  
  const [name, setname] = useState('wz')
  console.log(name)
  return (
    <div>
      <button onClick={() => {
        setname('wz-2')
        console.log(name)
      }}>click</button>
    </div>
  )
}

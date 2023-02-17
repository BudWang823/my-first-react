import React, { useState } from 'react'

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

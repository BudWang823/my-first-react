import React, { useEffect, useState } from 'react'
import { getJson } from '../api/hooks'

function Box() {
   const [count, setCount] = useState(0);
   let timeout
   useEffect(() => {
    timeout = setTimeout(() => {
        setCount( count + 1)
        console.log(count)
    },1000)
   
    return function() {
        // clearTimeout(timeout)
    }
   }, [count]);
    return (
        <div>
            {count}
        </div>
    )
}

export default function App() {
    const [isShow, setIsShow] = useState(false);
    return (
    <div>
      <button onClick={() => {
        setIsShow(!isShow)
      }}>删除</button>
      {isShow && <Box></Box>}
    </div>
  )
}


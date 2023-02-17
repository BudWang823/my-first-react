import React, { useState } from 'react'

export default function App() {
  const [text,setText] = useState('')
  const [list, setList] = useState([])
  const handleChange = (t) => {
    setText(t)
  }
  const handleAdd = () => {
    setList([...list,{text,id: new Date().valueOf()}])
    setText('')
    
  }
  const handleDel = (index) => {
    console.log(index)
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <div>
      <div>
        <input onChange={e => handleChange(e.target.value)} value={text}/>
        <button onClick={handleAdd}>add</button>
      </div>
      <div>
        <ul>
          {
            list.map((item,index) => {
              return <li key={item.id}><button onClick={e => handleDel(index)}>del</button>======================{item.text}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

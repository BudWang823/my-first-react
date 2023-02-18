import React, { useState, useRef, useCallback } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const myText = useRef();
  const handleChange = useCallback((t) => {
    setText(t)
  });


  const handleAdd = useCallback(() => {
    setList([...list, { text, id: new Date().valueOf() }])
    setText('')
    myText.current.focus()
  }, [text, list]);

  const handleDel = (index) => {
    console.log(index)
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>
      <div>
        <input onChange={e => handleChange(e.target.value)} value={text} ref={myText} />
        <button onClick={handleAdd}>add</button>
      </div>
      <div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={item.id}><button onClick={e => handleDel(index)}>del</button>======================{item.text}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

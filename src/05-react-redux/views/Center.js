import React from 'react'

export default function Center(props) {
  return (
    <div>
      center
      <button onClick={() => {
        console.log(props)
      }}>跳转</button>
    </div>
  )
}

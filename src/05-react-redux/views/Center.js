import React from 'react'

 function Center(props) {
  return (
    <div>
      center
      <button onClick={() => {
        console.log(props)
      }}>跳转</button>
    </div>
  )
}


export default Center

import React from 'react'

function NotFound() {
  return (
    <div>
      NotFound
    </div>
  )
}

function WZConnenct(cb, o) {
  const value = cb
  return (Commponent) => {
    return (props) => {
      return <div style={{color:'red'}}>
      <Commponent {...value} {...props} {...o}/>
    </div>
    }
    
  }
}
export default WZConnenct()(NotFound)
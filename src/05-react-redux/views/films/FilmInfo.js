import React from 'react'
import { withRouter } from 'react-router-dom'

 function FilmInfo(props) {
  return (
    <div>
      {props.info.name}
      <button onClick={() => {
        props.history.push(`/details/${props.info.filmId}`)
      }}>详情</button>
    </div>
  )
}
export default withRouter(FilmInfo)
import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import './css/Films.css'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'
export default function Films(props) {
  const changePage = (page) => {
    props.history.push(`/films/${page}`)
  }
  return (
    <div>
      <div className='banner'>banner</div>
      <div>
        <ul className='changeModel'>
          <li onClick={() => { changePage(`nowplaying`) }}>正在热映</li>
          <li onClick={() => { changePage(`comingsoon`) }}>即将上映</li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Switch>
        <Route path='/films/nowplaying' component={NowPlaying} />
        <Route path='/films/comingsoon' component={ComingSoon} />
        <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
      </Switch>

    </div>
  )
}

import React, { useState, useEffect } from 'react'
import store from '../redux/store';
import './css/Cinemas.css'
export default function Cinemas(props) {
  const {cityName} = store.getState().CityReducer
  return (
    <div className='Cinemas'>
      <div className='cityName' onClick={() => {
        props.history.push('/city')
      }}>{cityName}</div>
    </div>
  )
}

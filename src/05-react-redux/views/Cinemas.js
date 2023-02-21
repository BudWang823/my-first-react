import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import getCinemasAction from '../redux/actionCreator/CinemasActionCreator';
import './css/Cinemas.css'






 function Cinemas(props) {
  useEffect(() => {
    if(props.list.length === 0) {
      props.getCinemasAction()
    }
  }, [props.list]);
  return (
    <div className='Cinemas'>
      <div className='cityName' onClick={() => {
        props.history.push('/city')
      }}>{props.cityName}</div>
      <div className='search' onClick={() => {
        props.history.push('/cinemas/search')
      }}>搜索</div>
      <div>
        <ul>
          {
            props.list.map(item => {
              return <li className="cinemas" key={item.cinemaId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
const mapStoreToProps = storeState => {
  console.log(storeState)
  return {
    list: storeState.CinemasReducer.list,
    cityName : storeState.CityReducer.cityName
  }
}
const mapDispatchToProps = {
  getCinemasAction
}
export default connect(mapStoreToProps,mapDispatchToProps)(Cinemas)
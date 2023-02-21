import React, { useState, useEffect } from 'react'
import getCinemasAction from '../redux/actionCreator/CinemasActionCreator';
import store from '../redux/store';
import './css/Cinemas.css'









export default function Cinemas(props) {
  const {cityName} = store.getState().CityReducer
  const [cinemasList, setCinemasList] = useState(store.getState().CinemasReducer.list);
  useEffect(() => {
    const unsubcribe = store.subscribe(() => {
      setCinemasList(store.getState().CinemasReducer.list)
    })
    if(store.getState().CinemasReducer.list.length === 0) {
      store.dispatch(getCinemasAction())
    }
    return () => {
      // 销毁订阅
      unsubcribe()
    }
  }, []);
  return (
    <div className='Cinemas'>
      <div className='cityName' onClick={() => {
        props.history.push('/city')
      }}>{cityName}</div>
      <div className='search' onClick={() => {
        props.history.push('/cinemas/search')
      }}>搜索</div>
      <div>
        <ul>
          {
            cinemasList.map(item => {
              return <li className="cinemas" key={item.cinemaId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

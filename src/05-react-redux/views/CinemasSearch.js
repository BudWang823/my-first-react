import React, {useState, useEffect, useMemo } from 'react'
import { useHideTabbar } from '../mixin/hideTabbar';
import getCinemasAction from '../redux/actionCreator/CinemasActionCreator';
import store from '../redux/store';
import './css/CinemasSearch.css'
export default function CinemasSearch() {
  // useHideTabbar()
  const [inputValue, setInputValue] = useState('');
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
  const searchList = useMemo(() => {
    return cinemasList.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()))
  }, [inputValue, cinemasList]);

  return (
    <div className='CinemasSearch'>
      <div className='searchBox'>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </div>
      <div>
        <ul>
          {
            searchList.map(item => {
              return <li className="cinemas" key={item.cinemaId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

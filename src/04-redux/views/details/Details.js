import React, { useEffect, useState } from 'react'
import { getFilmInfo } from '../../../api/films'
import store from '../../redux/store';
const useGetFilmInfo = (filmId) => {
    const [filmInfo, setFilmInfo] = useState({});
    const getFilmInfoFn =async ()=> {
        const res = await getFilmInfo({filmId})
        setFilmInfo(res.data.film)
    }
    useEffect(() => {
        getFilmInfoFn()
    }, [filmId]);
    return filmInfo
}







export default function Details(props) {
    const filmInfo = useGetFilmInfo(props.match.params.filmId)
    useEffect(() => {
      store.dispatch({
        type: 'hide_tabbar'
      })
    
      return () => {
        store.dispatch({
          type: 'show_tabbar'
        })
      }
    }, []);
  return (
    <div>
      {
        Object.keys(filmInfo).map(item => {
            return <div key={item}>
                <span>{item}</span>===
                <span>{filmInfo[item].toString()}</span>
                <br />
                <br />
                <br />
            </div>
        })
      }
    </div>
  )
}

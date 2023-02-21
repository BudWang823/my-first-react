import React, { useEffect, useState } from 'react'
import { getFilmInfo } from '../../../api/films'
import { useHideTabbar } from '../../mixin/hideTabbar';

const useGetFilmInfo = (filmId) => {
  const [filmInfo, setFilmInfo] = useState({});
  const getFilmInfoFn = async () => {
    const res = await getFilmInfo({ filmId })
    setFilmInfo(res.data.film)
  }
  useEffect(() => {
    getFilmInfoFn()
  }, [filmId]);
  return filmInfo
}







export default function Details(props) {
  useHideTabbar()
  const filmInfo = useGetFilmInfo(props.match.params.filmId)

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

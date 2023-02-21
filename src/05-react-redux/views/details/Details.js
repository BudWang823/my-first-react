import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getFilmInfo } from '../../../api/films'
import { show , hide} from '../../redux/actionCreator/TabbarAction'

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


function Details(props) {
  useHideTabbar()
  const filmInfo = useGetFilmInfo(props.match.params.filmId)
useEffect(() => {
  console.log(props)

  return () => {
    
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
const mapDispatchToProps = {
  show,
  hide
}

export default connect(null,mapDispatchToProps)(Details)

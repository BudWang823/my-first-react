import React, { useEffect, useState } from 'react'
import { getComingList } from '../../../api/films';

export default function ComingSoon() {
  const [lsit, setLsit] = useState([]);
  useEffect(() => {
    getComingList().then(res => {
      console.log(res)
      setLsit(res.coming)
    })
  }, []);
  return (
    <div>
      comingSoon
    </div>
  )
}

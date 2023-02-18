import React, { useCallback, useEffect, useState } from 'react';
import { Router } from 'react-router-dom'
import { getNowPlaying } from '../../../api/films';

function useGetNowPlayingList() {
    const [list, setList] = useState([]);
    const fetchData = async () => {
        const res = await getNowPlaying()
        setList(res.data.films)
    }
    useEffect(() => {
        fetchData()
    }, []);
    return list
}
export default function NowPlaying(props) {
    const nowPlaying = useGetNowPlayingList()
    const handleClick = (item) => {
        props.history.push(`/details/${item.filmId}`)

    }
    return (
        <div>
            {
                nowPlaying.map((item, index) => {
                    return <div key={item.filmId} onClick={() => { handleClick(item) }}>{index + 1}.{item.name}</div>
                })
            }
        </div>
    )
}

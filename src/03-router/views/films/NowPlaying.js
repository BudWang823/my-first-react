import React, { useCallback, useEffect, useState } from 'react';
import { getNowPlaying } from '../../../api/films';
import FilmInfo from './FilmInfo';

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
                    return <FilmInfo key={item.filmId} info={item}></FilmInfo>
                })
            }
        </div>
    )
}


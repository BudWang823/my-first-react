import React, { useEffect, useState } from 'react'
import { getJson } from '../api/hooks'

export default function App() {
    const [list, setList] = useState([]);
    const [name, setName] = useState('wangzhen');
    useEffect(() => {
        setName(name.substring(0,1).toUpperCase() + name.substring(1))
        getJson()
    },[name])
    const  getdata = async() => {
        const res = await getJson()
        setList(res.data.cinemas)
    }
    return (
        <div>
            <button onClick={() => {
                setName('xiaoming')
            }}>change name</button>
            <div>{name}</div>
            <ul>
                {
                    list.map(item => {
                        return <li key={item.cinemaId}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

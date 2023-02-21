import React, { useState } from 'react'

export default function Login(props) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
    return (
        <div>
            <label>
                <span>username</span>
                <input type="text" value={username} onChange={e => {
                    setUsername(e.target.value)
                }}/>
            </label>
            <br />
            <label>
                <span>password</span>
                <input type="password" value={password} onChange={e=>{
                    setPassword(e.target.value)
                }}/>
            </label>
            <br />
            <button onClick={() => {
                localStorage.setItem('token', new Date().valueOf())
                console.log(props)
                props.history.replace('/center')
            }}>login</button>
        </div>
    )
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import './css/Tabbar.css'
export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <div className='tabbar'>
                    <ul>
                        <NavLink to="/films"><li>电影</li></NavLink>
                        <NavLink to="/cinemas"><li>影院</li></NavLink>
                        <NavLink to="/center"><li>我的</li></NavLink>
                    </ul>
                </div>
            </div>
        )
    }
}

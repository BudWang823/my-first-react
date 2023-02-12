import React, {Component} from "react";
import './css/04-index.css'

export default class App extends Component {
	render() {
		const class1 = {background:'yellow',fontSize:'30px'}
		return (
			<div>
				<div style={{background:'red'}}>123123</div>
				<div style={class1}>123123</div>
				<div className={'class'}>123123</div>
				<label htmlFor="input">用户名</label>
				<input type="text" id={'input'}/>
			</div>
		)
	}
}

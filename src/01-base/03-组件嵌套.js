import React, {Component} from "react";

class Navbar extends Component {
	render() {
		return <div>navbar</div>
	}
}

function Swiper() {
	return <div>swiper</div>
}

const Tabbar = _ => <div>Tabbar</div>

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar>
				</Navbar>
				<Swiper></Swiper>
				<Tabbar></Tabbar>
			</div>
		)
	}
}

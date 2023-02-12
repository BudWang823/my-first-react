import React, {Component} from "react";

export default class App extends Component {
	handleClick1() {
		console.log('handleClick1')
	}
	handleClick2 = () => {
		console.log('handleClick2')
	}
	handleClick3 = () => {
		console.log('handleClick3')
	}
	render() {
		const class1 = {background: 'yellow', fontSize: '30px'}
		return (
			<div>
				<input type="text"/>
				<button onClick={() => {
					console.log(1)
				}}>click
				</button>

				{/*不加小括号*/}
				<button onClick={this.handleClick1}>click</button>
				<button onClick={this.handleClick2}>click</button>
				<button onClick={() => {
					this.handleClick3()
				}}>click</button>
			</div>
		)
	}
}

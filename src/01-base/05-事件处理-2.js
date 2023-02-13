import React, {Component} from "react";

export default class App extends Component {
	a = 1
	handleClick1() {
		// this指向undefined
		console.log(this)
		console.log(this.a)
	}
	/**
	 * 最推荐以下这种
	 */
	handleClick2 = () => {
		console.log(this)
		console.log(this.a)
	}
	handleClick3 = () => {
		console.log(this)
		console.log(this.a)
	}
	render() {
		return (
			<div>
				<input type="text"/>
				<button onClick={() => {
					console.log(this)
					console.log(this.a)
				}}>click
				</button>

				{/*不加小括号*/}
				<button onClick={this.handleClick1}>click</button>
				<button onClick={this.handleClick2}>click</button>
				<button onClick={(e) => {
					console.log(e)
					this.handleClick3()
				}}>click</button>

			</div>
		//	绑定在跟节点上
		)
	}
}

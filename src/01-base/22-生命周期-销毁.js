import React, { Component } from 'react'


class Box extends Component {
componentWillUnmount() {
	console.log('componentWillUnmount')

	// 取消监听  订阅操作
}
	render() {
		return (
			<div>
				阿斯顿发送到发送到
			</div>
		)
	}
}

export default class App extends Component {
	state = {
		value: true
	}
	render() {
		return (
			<div>
				<button onClick={(e) => {
					this.setState({
						value: !this.state.value
					})
				}} value={this.state.value} >show/hidden</button>
				<div>
					{this.state.value && <Box/>}
				</div>
			</div>
		)
	}
}

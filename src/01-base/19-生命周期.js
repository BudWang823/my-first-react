import axios from 'axios';
import React, { Component } from 'react';
class APP extends Component {
	state = {
		name: 'wz'
	}
	/**
	 * 初始化数据
	 */
	UNSAFE_componentWillMount() {
		console.log('componentWillMount')

	}
	async componentDidMount() {
		console.log('componentDidMount')
		// 数据请求
		// 订阅函数调用
		// setInterval
		// 基于创建完成的dom进行初始化

		this.getList()
	}
	async getList() {
		const res = await axios.get('/test.json')
		this.setState({
			lsit: res.data.data.cinemas
		})
	}

	// 运行中
	// 性能优化函数
	shouldComponentUpdate(nextProps, nextState, c,d) {
		return JSON.stringify(this.state.name) !== JSON.stringify(nextState.name)
	}

	render() {
		console.log('render')
		return (
			<div>
				<button onClick={() => {
					this.setState({
						name: 'lmy'
					})
				}}>click</button>
				{this.state.name}
			</div>
		);
	}
}

export default APP;

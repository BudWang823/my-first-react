import React, {Component} from 'react';

class APP extends Component {
	/**
	 * 初始化数据
	 */
	componentWillMount() {

		console.log('componentWillMount')

	}

	componentDidMount() {
		console.log('componentDidMount')
		// 数据请求
		// 订阅函数调用
		// setInterval
		// 基于创建完成的dom进行初始化
	}


	render() {
		console.log('render')
		return (
			<div>


			</div>
		);
	}
}

export default APP;

import React, { Component } from 'react'


class Box extends Component {

	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log('UNSAFE_componentWillReceiveProps')
		console.log(this.props)
		return false
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return JSON.stringify(this.props) !== JSON.stringify(nextProps)
	}
	render() {
		const style = {
			width: '100px',
			height: '100px',
			float: 'left',
			border: '1px solid #000',
		}

		const style2 = {
			width: '100px',
			height: '100px',
			float: 'left',
			border: '1px solid #f00',
			background: 'red'
		}

		return (
			<div style={this.props.isAcctive ? style2 : style}>
				<span>props: {this.props.name}</span>
			</div>
		)
	}
}

export default class App extends Component {
	state = {
		list: ['01'],
		// list: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
		value: ''
	}
	render() {
		return (
			<div>
				<input onChange={(e) => {
					this.setState({
						value: e.target.value
					})
				}} value={this.state.value} />
				<div>
					{
						this.state.list.map((item, index) => {
							return <Box key={item} isAcctive={'' + index === this.state.value} index={index} name={item} />
						})
					}
				</div>
			</div>
		)
	}
}

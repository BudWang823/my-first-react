import React, { Component } from 'react'


class Box extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.props) !== JSON.stringify(nextProps)
	}
	render() {
		console.log('box render', this.props.index)
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
		list: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
		value: ''
	}
	render() {
		return (
			<div>
				<input onChange={(e) => {
					console.log(e.target.value)
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

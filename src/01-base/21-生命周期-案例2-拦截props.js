import React, { Component } from 'react'


class Box extends Component {
	state = {
		name: ''
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log('UNSAFE_componentWillReceiveProps')
		console.log(this.props)
		this.setState({
			name: nextProps.name
		})
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return JSON.stringify(this.props) !== JSON.stringify(nextProps)
	}
	render() {

		return (
			<div>
				<span>props: {this.props.name}</span>
				<br />
				<span>state: {this.state.name}</span>
			</div>
		)
	}
}

export default class App extends Component {
	state = {
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
					<Box name={this.state.value}/>
				</div>
			</div>
		)
	}
}

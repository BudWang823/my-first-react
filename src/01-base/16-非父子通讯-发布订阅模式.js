import React, {Component} from 'react';
import {PublishSubscribe} from "../utils/utils";

const bus = PublishSubscribe()

class Child extends Component {
	state = {
		id: '',
		content: ''
	}

	render() {
		return <div style={{overflow: 'hidden'}}>
			{!this.state.id && <div style={{float: 'left'}} onClick={() => {
				const id = bus.subscribe('event1', (string) => {
					console.log(this.state.id, this.props.order, string)
					this.setState({
						content: this.state.content + string
					})
				})
				this.setState({id})
				console.log(this.props.order, '订阅成功')
			}}>订阅</div>}
			{this.state.id && <div style={{float: 'right'}} onClick={() => {
				bus.unSubscribe('event1', this.state.id)
				this.setState({id: ''})
			}}>取消订阅</div>}
			<div style={{textAlign: 'center'}}>订阅id{this.state.id} -- {this.props.order}</div>
			<div>{this.state.content}</div>
		</div>
	}

}

class App extends Component {
	state = {
		style: {
			backgroundColor: 'pink',
			margin: '10px',
			padding: '10px',
		},
		length: ['1001', '2001', '3001', '4001', '5001', '6001', '7001', '8001'],
		inputText: ''

	}

	publish = () => {
		bus.publish('event1', this.state.inputText)
		this.setState({
			inputText: ''
		})
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.inputText} onChange={(e) => {
					this.setState({
						inputText: e.target.value
					})
				}}/>
				<button onClick={this.publish}>发布</button>
				{this.state.length.map(item => {
					return <div style={this.state.style} key={item}><Child order={item}></Child></div>
				})}
			</div>
		);
	}
}

export default App;

import React, {Component} from 'react';

class APP extends Component {
	state = {
		a: 1
	}
	handleClick1 = () => {
		this.setState({
			a: this.state.a + 1
		})
		console.log(this.state.a)
		this.setState({
			a: this.state.a + 1
		})
		console.log(this.state.a)

		this.setState({
			a: this.state.a + 1
		})
		console.log(this.state.a)
		this.setState({
			a: this.state.a + 1
		})
		console.log(this.state.a)
	}
	handleClick2 = () => {
		setTimeout(() => {
			this.setState({
				a: this.state.a + 1
			})
			console.log(this.state.a)
			this.setState({
				a: this.state.a + 1
			})
			console.log(this.state.a)

			this.setState({
				a: this.state.a + 1
			})
			console.log(this.state.a)
			this.setState({
				a: this.state.a + 1
			})
			console.log(this.state.a)
		},0)
	}
	render()
	{
		return (
			<div>
				<button onClick={this.handleClick1}>add1</button>
				<button onClick={this.handleClick2}>add2</button>
			</div>
		);
	}
}

export default APP;

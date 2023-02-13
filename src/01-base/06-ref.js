import React, {Component} from "react";

export default class App extends Component {
	input = React.createRef()
	render() {
		return (
			<div>
				<div style={{marginBottom: '100px'}}>
					<input ref={this.input} type="text"/>
					<button onClick={() => {
						console.log(this.input.current.value)
					}}>click
					</button>
				</div>



				<div>
					<input ref="inputRef" type="text"/>
					<button onClick={() => {
						console.log(this.refs.inputRef.value)
					}}>click
					</button>
				</div>
			</div>
		)
	}
}

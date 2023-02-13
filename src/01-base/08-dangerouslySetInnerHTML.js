import React, {Component} from 'react';

class App extends Component {
	state = {
		html: "<a href='http://www.baidu.com' target='_blank'>asdfasdfasdfa</a>"
	}

	render() {
		return (
			<div>
				<span>{this.state.html}</span>
				<div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
			</div>
		);
	}
}

export default App;

import React, {Component} from 'react';
import "./css/11-betterScorll.css"
import BetterScroll from 'better-scroll'
class APP extends Component {

	state = {
		list: []
	}

	click = () => {
		const a = []
		a.length = 1000
		a.fill('1')
		this.setState({
			list: a
		}, () => {
			new BetterScroll('.ul',{})
		})
	}

	render() {
		const {list} = this.state
		return (
			<div>
				<button onClick={this.click}>click</button>
				<ul className="ul">
					{
						list.map((item, i) => <li key={i}>sdfsdf{i + 1}</li>)
					}
				</ul>
			</div>
		);
	}
}

export default APP;

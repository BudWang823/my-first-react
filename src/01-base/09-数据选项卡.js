import React, {Component} from 'react';
import './css/09-数据选项卡.css'
import Center from "./component/Center";
import Cinemas from "./component/Cinemas";
import Films from "./component/Films";
import BetterScroll from 'better-scroll'
console.log(BetterScroll)
// let bs = new BetterScroll('.wrapper', {
// 	movable: true,
// 	zoom: true
// })
class App extends Component {
	state = {
		list: [
			{id: 1, text: '电影'},
			{id: 2, text: '影院'},
			{id: 3, text: '咨询'}
		],
		active: 0
	}
	handleChangeNav = (active) => {
		this.setState({active})
	}
	componentDidMount() {

	}

	render() {
		const {
			list,
			active
		} = this.state
		const PageShow = () => {
			switch(active) {
				case 0:
					return <Films></Films>;
				case 1:
					return <Cinemas></Cinemas>;
				case 2:
					return <Center></Center>;
				default:
					return null
			}

		}
		return (
			<div className="maizuo">
				<div className="content">{PageShow()}</div>
				<ul className="navbar">{list.map((item, index) => <li key={item.id} className={active === index ? 'active':''} onClick={() => {this.handleChangeNav(index)}}>{item.text}</li>)}</ul>
			</div>
		);
	}
}

export default App;

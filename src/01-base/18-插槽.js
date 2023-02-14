import React, {Component} from 'react';
import './css/18-css.css'
class Navbar extends Component{
	render() {
		return <div className="Navbar">
			{this.props.children}
			<span>navbar</span>
		</div>
	}

}
function SideBar() {
	return (
		<div>
			<ul>
				<li>11111111</li>
				<li>11111111</li>
				<li>11111111</li>
				<li>11111111</li>
				<li>11111111</li>
				<li>11111111</li>
				<li>11111111</li>
			</ul>
		</div>
	)

}
class APP extends Component {
	state = {
		isShow: true
	}
	render() {
		return (
			<div>
				<Navbar>
					<button onClick={() => {
						this.setState({
							isShow: !this.state.isShow
						})
					}}>click</button>

				</Navbar>
				{this.state.isShow && <SideBar></SideBar>}
			</div>
		);
	}
}

export default APP;

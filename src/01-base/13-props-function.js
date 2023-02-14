import React, {Component} from 'react';
import NavBar from "./component/NavBar";
import NavBarStatic from "./component/NavBarStatic";
import SideBar from "./component/SideBar";


class App extends Component {
	render() {
		const obj = {
			name: 'wz',
			isShowRight: false,
			isShowLeft: true
		}
		return (
			<div>
				<NavBar name={"导航"}></NavBar>
				<SideBar position={"right"} bg={"yellow"}></SideBar>


			</div>
		);
	}
}

export default App;

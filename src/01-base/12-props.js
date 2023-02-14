import React, {Component} from 'react';
import NavBar from "./component/NavBar";
import NavBarStatic from "./component/NavBarStatic";


class App extends Component {
	render() {
		const obj = {
			name: 'wz',
			isShowRight: false,
			isShowLeft:true
		}
		return (
			<div>
				<h1>NavBar</h1>
				<NavBar name={'nav1'} isShowLeft={true} isShowRight={false}></NavBar>
				<NavBar name={'nav2'} isShowLeft={false} isShowRight={true}></NavBar>
				<NavBar name={'nav3'} isShowLeft={true} isShowRight={true}></NavBar>
				<NavBar name={'nav4'} isShowLeft={false} isShowRight={false}></NavBar>
				<h1>NavBarStatic</h1>
				<NavBarStatic name={'nav1'} isShowLeft={false} isShowRight={false}></NavBarStatic>
				<NavBarStatic name={'nav2'} isShowLeft={true} isShowRight={false}></NavBarStatic>
				<NavBarStatic name={'nav3'} isShowLeft={false} isShowRight={true}></NavBarStatic>
				<NavBarStatic name={'nav4'} isShowLeft={true} isShowRight={true}></NavBarStatic>
				<NavBarStatic></NavBarStatic>
				<NavBarStatic {...obj}></NavBarStatic>
			</div>
		);
	}
}

export default App;

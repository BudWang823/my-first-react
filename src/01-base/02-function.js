// class Test {
// 	constructor(props) {
// 		this.name = props
// 	}
//
// 	test1() {
// 		console.log(this.name, 'test1')
// 	}
//
// 	test2() {
// 		console.log(this.name, 'test2')
//
// 	}
//
// }
//
// class Child extends Test {
//
// }
//
//
// const obj = new Test('Test')
// const obj2 = new Child('Child')
// obj.test1()
// obj2.test1()

import React from "react";

class App extends React.Component{
	render() {
		return <div>
			第一个react
		</div>
	}

}
export default App

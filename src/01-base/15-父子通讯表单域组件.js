import React, {Component} from 'react';

class Field extends Component {
	state = {}

	render() {
		const {
			type,
			label,
			value
		} = this.props
		return (
			<div>
				<label>{label}
					<input type={type} onChange={(e) => {
						this.props.onChange(e.target.value)
					}} value={value}/>
				</label>
			</div>
		)
	}
}

class App extends Component {
	state = {
		username: '123122',
		password: '233',

	}
	login() {
		const {
			username,
			password
		} = this.state
		console.log(username,password)

	}

	render() {
		const {
			username,
			password
		} = this.state
		return (
			<div>
				<Field label="账号" type="text" onChange={username => {this.setState({username})}} value={username}></Field>
				<Field label="密码" type="password" onChange={password => {this.setState({password})}} value={password}></Field>
				<div>
					<button onClick={() => {
						this.login()
					}}>登陆
					</button>
					<button>取消</button>
				</div>
			</div>
		);
	}
}

export default App;

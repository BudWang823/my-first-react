import React, {Component} from "react";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
			count: 0
		}
	}

	input = React.createRef()
	handleAddTodo = () => {
		const input = this.input.current
		if (!input.value) {
			alert('请输入')
			return
		}
		this.setState({
			todoList: [...this.state.todoList, {id: (this.state.count + 1).toString(), text: input.value}],
			count: this.state.count + 1
		})
		input.value = ''
		input.focus()
	}
	handleDelTodo = (item, index) => {
		const {todoList} = this.state
		todoList.splice(index,1)
		this.setState({
			todoList
		})
	}

	render() {
		const {
			todoList
		} = this.state
		const renderTodoList = todoList.map((item, index) => {
			return (
				<li key={item.id}>
					<span>{`${index + 1}: ${item.text}`}</span>
					<button onClick={_ => {
						this.handleDelTodo(item, index)
					}}>删除
					</button>
				</li>
			)
		})
		return (
			<div>
				<div>
					<input ref={this.input} type="text"/>
					<button onClick={_ => {
						this.handleAddTodo()
					}}>add
					</button>
				</div>
				{todoList.length ? <ul>{renderTodoList}</ul> : <div>暂无数据</div>}
			</div>
		)
	}
}

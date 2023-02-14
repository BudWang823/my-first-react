import React, {Component} from "react";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
			text: ''
		}
	}
	handleAddTodo = () => {
		const {text} = this.state
		if (!text) {
			alert('请输入')
			return
		}
		this.setState({
			todoList: [...this.state.todoList, {id: `${new Date().valueOf()}`, text,isChecked: false}],
			text: ''
		})
		setTimeout(() => {
			console.log(this.state.todoList)
		},1)
	}
	handleDelTodo = (item, index) => {
		const {todoList} = this.state
		todoList.splice(index,1)
		this.setState({
			todoList
		})
	}
	handleChecked = ( index) => {
		const newlist = [...this.state.todoList]
		newlist[index].isChecked = !newlist[index].isChecked
		this.setState({
			todoList:newlist
		})
	}

	render() {
		const {
			todoList
		} = this.state
		const renderTodoList = todoList.map((item, index) => {
			return (
				<li key={item.id}>

					<input type="checkbox" checked={item.isChecked} onChange={(e) => {this.handleChecked(index)}}></input>
					<span style={{textDecoration: item.isChecked? 'line-through': 'none'}} dangerouslySetInnerHTML={{__html: `${index + 1}: ${item.text}`}}></span>
					<button onClick={_ => {this.handleDelTodo(item, index)}}>删除</button>
				</li>
			)
		})
		return (
			<div>
				<div>
					<input value={this.state.text} onChange={(e) => {
						this.setState({
							text: e.target.value
						})
					}} type="text"/>
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

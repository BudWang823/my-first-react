import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        name: '21'
    }
    // 每次render都会调用
    // 不允许做 异步操作
    // 替代componentWillMount 和  componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, nextState) {
        // this是undefind
        console.log((nextProps, nextState))
        console.log('getderivedStateFromProps') 
        return {
            name: 1,
            age: 11
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        age: this.state.age + 1
                    })
                }}>ssdfsdfsdf</button>
                {this.state.age}
            </div>
        )
    }
}

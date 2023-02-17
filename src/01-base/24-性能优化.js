import React, { PureComponent, Component } from 'react'
/**
 * PureComponent 可代替shouldComponentUpdate    前提是 不经常更新数据
 */
class Box extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.name !== nextProps.name
    // }
    render() {
        console.log('render')
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default class App extends Component {
    state = {
        name: 'sd'
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: '123123123'
                    })
                }}>click</button>
                <Box name={this.state.name} />
            </div>
        )
    }
}
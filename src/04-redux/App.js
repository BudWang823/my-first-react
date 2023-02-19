import React, { Component } from 'react'
import IndexRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
export default class App extends Component { 
  state = {
    isShowTabbar: true
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState())
      this.setState({
        isShowTabbar: store.getState().showTabbar
      })
    })
  }
  render() {
    return (
      <div>
        <IndexRouter>
          {this.state.isShowTabbar && <Tabbar></Tabbar>}
        </IndexRouter>
      </div>
    )
  }
}

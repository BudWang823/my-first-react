import React, { Component } from 'react'
import IndexRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
import { connect } from 'react-redux'
class App extends Component { 
  state = {
    isShowTabbar: true
  }
  componentDidMount() {
    console.log(this.props.store)
  }
  render() {
    return (
      <div>
        <IndexRouter>
          {this.props.isShowTabbar && <Tabbar></Tabbar>}
        </IndexRouter>
      </div>
    )
  }
} 
const mapStoreToProps = (storeState) => {
  return {
    isShowTabbar: store.getState().TabbarReducer.showTabbar
  }
}
export default connect(mapStoreToProps)(App)

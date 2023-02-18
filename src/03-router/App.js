import React, { Component } from 'react'
import IndexRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <IndexRouter>
          <Tabbar></Tabbar>
        </IndexRouter>
      </div>
    )
  }
}

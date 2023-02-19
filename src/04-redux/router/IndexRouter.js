import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Details from '../views/details/Details'
import Login from '../views/Login'
import City from '../views/City'
function isAuth() {
  return localStorage.getItem('token')
}
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {this.props.children}
          <Switch>
            <Route path='/films' component={Films} />
            <Route path='/cinemas' component={Cinemas} />
            {/* <Route path='/center' component={Center} /> */}
            <Route path='/center' render={(props) => {
              return isAuth() ? <Center {...props}/> : <Redirect to='/login' />
            }} />

            <Route path='/city' component={City} />
            <Route path='/login' component={Login} />
            <Route path='/details/:filmId' component={Details} />
            {/* 模糊匹配 */}
            <Redirect from="/" to="/films" exact></Redirect>
            {/* 精确匹配 exact */}
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

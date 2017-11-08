import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider }  from 'react-redux'
import thunk from 'redux-thunk'
// import users from 'redux/modules/users'
import Restricted from 'helpers/restricted'
import * as reducers from 'redux/modules'

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

  console.log(store)

function checkAuth (Component) {
  // return Component
  return Restricted(Component, store)
}
const testt = 'ttt'
ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider }  from 'react-redux'
import thunk from 'redux-thunk'
import users from 'redux/modules/users'


const store = createStore(users, applyMiddleware(thunk))
console.log(store)

function checkAuth () {
  console.log('>>>>>>>>>>>>')
  console.log('.....', arguments)
}
const testt = 'ttt'
ReactDOM.render(
  <Provider store={store}>
    {getRoutes(testt)}
  </Provider>,
  document.getElementById('app')
)

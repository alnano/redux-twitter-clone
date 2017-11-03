
import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer,
         FeedContainer, LogoutContainer } from '../containers'

const ReactRouter = require('react-router-dom');
// const Router = ReactRouter.BrowserRouter;
// const Route = ReactRouter.Route;
// const Switch = ReactRouter.Switch;

export default function getRoutes(checkAuth) {
  return (
    <BrowserRouter> 
      <MainContainer>
        <Switch>
          <Route exact path='/' component={checkAuth(HomeContainer)}  /> 
          <Route path='/login' component={checkAuth(AuthenticateContainer)} />
          <Route path='/feed' component={checkAuth(FeedContainer)} />
          <Route path='/logout' component={LogoutContainer}  />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  )
}
//export default routes
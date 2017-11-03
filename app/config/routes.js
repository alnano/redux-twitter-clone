
import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from '../containers'

const ReactRouter = require('react-router-dom');
// const Router = ReactRouter.BrowserRouter;
// const Route = ReactRouter.Route;
// const Switch = ReactRouter.Switch;

export default function getRoutes(checkAuth) {
  return (
    <BrowserRouter> 
      <MainContainer>
        <Switch>
          <Route exact path='/' component={HomeContainer} onEnter={checkAuth} /> 
          <Route path='/auth' component={AuthenticateContainer} onEnter={checkAuth} />
          <Route path='/feed' component={FeedContainer} onEnter={console.log('gg')} />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  )
}
//export default routes
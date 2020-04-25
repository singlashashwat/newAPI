import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom' // react-router v4
import history from '../history'
import { RP } from '../constants'
import PrivateRoute from './PrivateRoute'
import FirstContainer from '../containers/Firstcontainer'


// import * as serviceWorker from './serviceWorker';
const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route path={RP.FIRST} component={FirstContainer} />
      

      </Switch>
    </div>
  </ConnectedRouter>
)

export default App

import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { RP } from '../constants'
// import SideNav from './components/core/SideNav'

class PrivateRoute extends React.Component {
  render() {
    const {
      isAuthenticated,
      isAdminFlag,
      component: Component,
      ...props
    } = this.props
    return (
      <React.Fragment>
        <Route
          {...props}
          render={props =>
            props.match.path == RP.ADMIN_CAMP_LIST ? (
              isAuthenticated && isAdminFlag && <Component {...props} />
            ) : isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: RP.LOGIN,
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      </React.Fragment>
    )
  }
}

//
export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdminFlag: state.auth.isAdminFlag,
}))(PrivateRoute)

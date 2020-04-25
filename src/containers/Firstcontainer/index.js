import React from 'react'
import { connect } from 'react-redux'
import First from '../../components/First'
import { connectWithLifecycle } from 'react-lifecycle-component'
import { push } from 'connected-react-router'
import { RP, URL } from '../../constants'




const mapStateToProps = state => {
  return {
    // subtitle: state.uploadMaterial.subtitle,
  }
}

const mapDispatchToProps = dispatch => {
    debugger;
  return {
    // componentDidMount: loadingBillInfo,
    // onClickBackToOverview: () => {
    //   dispatch(push(RP.HOME))
    // },
  }
}

const FirstContainer = connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps
)(First)

export default FirstContainer

import React from 'react'
import { connect } from 'react-redux'
import First from '../../components/First'
import { connectWithLifecycle } from 'react-lifecycle-component'
import { push } from 'connected-react-router'
import { RP, URL } from '../../constants'
import { fetchAuthApi } from '../../helpers'
import {
  selectors as firstReducerSelectors,
  actions as firstReducerActions,
} from '../../reducers/firstReducer'



const mapStateToProps = state => {
  return {
    articles: state.firstReducer.articles,
  }
}

const mapDispatchToProps = dispatch => {
    const loadingInfo = () => {
      // dispatch(spinnerActions.startSpinner(PROFILE))
      // dispatch(spinnerActions.clearError(PROFILE))
      dispatch(
        fetchAuthApi(
          '/',
          {
            pageSize : 10,
            page: 1,
            apiKey : 'fcbb36b75f874e69a50357c18f97ca23',
            domains:'washingtonpost.com,nytimes.com'
          },
          res => {
            console.log('res', res)
  
            dispatch(firstReducerActions.articles({ res }))
            // dispatch(spinnerActions.stopSpinner(PROFILE))
          },
          err => {
            // dispatch(spinnerActions.setError(PROFILE, err.error_description))
            // dispatch(spinnerActions.stopSpinner(PROFILE))
            console.log('err', err)
          }
        )
      )
    }
  return {
    componentDidMount: loadingInfo,
    // onClickBackToOverview: () => {
    //   dispatch(push(RP.HOME))
    // },
    onPageChange :(value) =>{
      dispatch(
        fetchAuthApi(
          '/',
          {
            pageSize : 10,
            page: value,
            apiKey : 'fcbb36b75f874e69a50357c18f97ca23',
            domains:'washingtonpost.com,nytimes.com'
          },
          res => {
            console.log('res', res)
  
            dispatch(firstReducerActions.articles({ res }))
            // dispatch(spinnerActions.stopSpinner(PROFILE))
          },
          err => {
            // dispatch(spinnerActions.setError(PROFILE, err.error_description))
            // dispatch(spinnerActions.stopSpinner(PROFILE))
            console.log('err', err)
          }
        )
      )
    }
  }
}

const FirstContainer = connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps
)(First)

export default FirstContainer

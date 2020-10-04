import { connect } from 'react-redux'
import TopStatusBar from '../components/TopStatusBar/index'
import { connectWithLifecycle } from 'react-lifecycle-component'
import { fetchAuthApi } from '../helpers'
import {
  selectors as firstReducerSelectors,
  actions as firstReducerActions,
} from '../reducers/firstReducer'


const mapStateToProps = state => {
    return {
    //   articles: state.firstReducer.articles,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onClickSearch: (value) => {
        debugger
        dispatch(
          fetchAuthApi(
            '/',
            {
              pageSize : 10,
              page: 1,
              apiKey : 'fcbb36b75f874e69a50357c18f97ca23',
              domains:'washingtonpost.com,nytimes.com',
              q: value.target.value ? value.target.value : ''
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
      },
    }
  }

const TopStatusBarContainer = connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps
)(TopStatusBar)

export default TopStatusBarContainer
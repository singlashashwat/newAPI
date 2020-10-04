import { URL, C } from './constants'
// import _ from 'lodash'
import axios from 'axios'
import React from 'react'

export const getAuthData = () => {
  const data = localStorage.getItem(C.OOD_PORTAL_AUTH_DATA)
  return data ? JSON.parse(data) : ''
}

export const setAuthData = authData => {
  localStorage.setItem(C.OOD_PORTAL_AUTH_DATA, JSON.stringify(authData))
}

export const removeAuthData = () => {
  localStorage.removeItem(C.OOD_PORTAL_AUTH_DATA)
}

export const fetchApi = () => (
  url,
  data,
  successCallback,
  errorCallback
) => {
  // const user = getAuthData().currentPortalUser
  axios
    .create({
      method: 'GET',
      baseURL: URL.URL_NEWS,
      headers: {
        // token: accessToken,
      },
      // timeout: 5000,
    })
    .get(url, {
      params:data
    })
    .then(res => {
      if (res && res.status === 200 && res.data) {
        if (res.data.articles) {
            successCallback(res.data.articles)
        } else {
          throw res
        }
      } else {
        throw res
      }
    })
    .catch(err => {
      if (err.data) {
        if (err.data.error_description) {
          errorCallback(err.data)
        } else {
          errorCallback({
            err: err,
            error_description: 'unknown error',
            error_code: 0,
          })
        }
      } else {
        errorCallback({
          error_description: 'unknown error',
          error_code: 0,
          err: err,
        })
      }
    })
}

export const fetchAuthApi = (url, data, successCallback, errorCallback) => {
  return (dispatch, getState) => {
    // const token = getState().auth.accessToken || ''
    fetchApi()(url, data, successCallback, errorCallback)
  }
}

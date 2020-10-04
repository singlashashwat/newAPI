const name = 'firstReducer'
export const types = {
  ARTICLES: `${name}/ARTICLES`,
//   SUBTITLE: `${name}/SUBTITLE`,
//   COUPONCODE: `${name}/COUPONCODE`,
//   COUPONINFO: `${name}/COUPONINFO`,
//   COUPONINFOURL: `${name}/COUPONINFOURL`,
//   COUPONCOLOR: `${name}/COUPONCOLOR`,
//   LOGO_URL: `${name}/LOGO_URL`,
//   VSTORYLOGO_URL: `${name}/VSTORYLOGO_URL`,
//   VIDEOLOGO_URL: `${name}/VIDEOLOGO_URL`,
//   HSTORYLOGO_URL: `${name}/HSTORYLOGO_URL`,
//   FIMPRESSION_URL: `${name}/FIMPRESSION_URL`,
//   DEAL_URL: `${name}/DEAL_URL`,
//   CLAIMCOUPON_URL: `${name}/CLAIMCOUPON_URL`,
//   COUPON_URL: `${name}/COUPON_URL`,
//   STORE_UPLOADMATERIAL_INFO_1: `${name}/STORE_UPLOADMATERIAL_INFO_1`,
//   UPDATE_AD_ID: `${name}/UPDATE_AD_ID`,
}

export const selectors = {
  get_articles: state => state.firstReducer.articles,
}

export const actions = {
  articles: payload => ({
    type: types.ARTICLES,
    payload,
  }),
}

const initialState = {
    articles:''
}

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTICLES:
      return {
        ...state,
        articles : action.payload,
      }

    default:
      return state
  }
}
export default firstReducer
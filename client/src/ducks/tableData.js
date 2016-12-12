export default (state={}, action) => {
  switch (action.type) {
    // case 'SET_STATE':
    //   return {showSignIn: false, showSignUp: false}
    case 'REMOVE_VALUES':
      return {}
    case 'SET_VALUE':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

// export const setInitial = () => ({type: 'SET_STATE'})
export const setValue = (obj) => ({type: 'SET_VALUE', payload: obj})
export const removeValues = () => ({type: 'REMOVE_VALUES'})

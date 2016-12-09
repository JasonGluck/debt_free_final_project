// export default (state={}, action) => {
//   switch (action.type) {
//     case 'SET_INITIAL':
//       return {showSignIn: false, showSignUp: false, showNewCard: false, addPeriod: false, showPeriodList: false}
//     case 'SIGN_IN':
//       return Object.assign({}, state, {showSignIn: true})
//     case 'SIGN_UP':
//       return Object.assign({}, state, {showSignUp: true})
//     case 'SHOW_NEW_CARD':
//       return Object.assign({}, state, {showNewCard: !state.showNewCard})
//     case 'ADD_PERIOD':
//       return Object.assign({}, state, {addPeriod: !state.addPeriod})
//     case 'SHOW_PERIODS':
//       return Object.assign({}, state, {showPeriodList: !state.showPeriodList})
//     case 'ALL_FALSE':
//       return Object.assign({}, state, {showSignIn: false, showSignUp: false})
//     default:
//       return state
//   }
// }

// export const setInitial = () => ({type: 'SET_INITIAL'})
// export const signIn = () => ({type: 'SIGN_IN'})
// export const signUp = () => ({type: 'SIGN_UP'})
// export const showNewCard = () => ({type: 'SHOW_NEW_CARD'})
// export const addPeriod = () => ({type: 'ADD_PERIOD'})
// export const showPeriods = () => ({type: 'SHOW_PERIODS'})
// export const allFalse = () => ({type: 'ALL_FALSE'})

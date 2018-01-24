const initialState = {
  matches: false,
  swiping: true,
  settings: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'SHOW_MATCHES': {
      return 'matches'
    }
    case 'SHOW_SWIPING': {
      return 'swiping'
    }
    default:
      return state;
  }
}

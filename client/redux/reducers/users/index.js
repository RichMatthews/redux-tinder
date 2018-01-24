const initialState = {
  matches: [],
  usersLiked: [],
  usersDisliked: [],
  allUsers: [],
  usersQueue: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_USER_FROM_QUEUE': {
      let allUsers = [].concat(state.allUsers); // needs changing
      allUsers.shift();
      return { ...state, allUsers };
    }
    case 'PULL_INITIAL_USERS': {
      const allUsers = [].concat(state.allUsers).concat(action.data);
      return { ...state, allUsers };
    }
    case 'USER_LIKED': {
      const usersLiked = [].concat(state.usersLiked).concat(action.data);
      return { ...state, usersLiked };
    }
    case 'USER_DISLIKED': {
      const usersDisliked = [].concat(state.usersDisliked).concat(action.data);
      return { ...state, usersDisliked };
    }
    default:
      return state;
  }
};

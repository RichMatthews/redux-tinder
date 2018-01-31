import firebase from 'firebase';
import '../../../Firebase/config.js';

const initialState = {
  matches: [],
  usersLiked: [],
  usersDisliked: [],
  remainingUsers: []
};

const removeAlreadySeenUsersFromQueue = (newUsers, likedUsers) => {
  return newUsers.filter(newUser => likedUsers.findIndex(likedUser => likedUser.username === newUser.username) === -1);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_USER_FROM_QUEUE': {
      let allUsers = [].concat(state.allUsers); // needs changing
      allUsers.shift();
      return { ...state, remainingUsers };
    }
    case 'REMOVE_ALREADY_SEEN_USERS_FROM_QUEUE': {
      const usersRemoved = removeAlreadySeenUsersFromQueue(state.remainingUsers, state.usersLiked)
      const remainingUsers = usersRemoved;
      return { ...state, remainingUsers };
    }
    case 'PULL_INITIAL_USERS': {
      const remainingUsers = [].concat(state.remainingUsers).concat(action.data);
      return { ...state, remainingUsers };
    }
    case 'USER_LIKED': {
      const usersLiked = [].concat(state.usersLiked).concat(action.data);
      return { ...state, usersLiked };
    }
    case 'USER_DISLIKED': {
      const usersDisliked = [].concat(state.usersDisliked).concat(action.data);
      return { ...state, usersDisliked };
    }
    case 'DATA_FETCHED_SUCCESSFULLY': {
      const matches = [].concat(action.data.matches)
      const usersLiked = [].concat(action.data.usersLiked)
      const usersDisliked = [].concat(action.data.usersDisliked)
      return { ...state, matches, usersLiked, usersDisliked }
    }
    default:
      return state;
  }
};

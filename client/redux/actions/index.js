export const removeUserFromQueue = () => ({
  type: 'REMOVE_USER_FROM_QUEUE'
});

export const pullInitialUsers = (users) => ({
    type: 'PULL_INITIAL_USERS',
    data: users
});

export const userLiked = (user) => ({
  type: 'USER_LIKED',
  data: user
});

export const userDisliked = (user) => ({
  type: 'USER_DISLIKED',
  data: user
});

export const userLoggedIn = (user) => ({
  type: 'USER_LOGGED_IN',
  data: user
});

export const retrieveMatches = (user) => ({
  type: 'RETRIEVE_MATCHES',
  data: user
});

export const removeAlreadySeenUsersFromQueue = (user) => ({
  type: 'REMOVE_ALREADY_SEEN_USERS_FROM_QUEUE',
  data: user
});

export const syncFirebaseToStore = (data) => ({
  type: 'SYNC_FIREBASE_TO_STORE',
  data: data
})

export const dataFetchedSuccessfully = (data) => ({
  type: 'DATA_FETCHED_SUCCESSFULLY',
  data: {
    data
  }
});

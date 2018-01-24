export const removeUserFromQueue = () => ({
  type: 'REMOVE_USER_FROM_QUEUE'
});

export const pullInitialUsers = (users) => ({
    type: 'PULL_INITIAL_USERS',
    data: users
});

export const userLiked = (user) => ({
  type: 'USER_LIKED',
  data: {
    user
  }
});

export const userDisliked = (user) => ({
  type: 'USER_DISLIKED',
  data: {
    user
  }
});

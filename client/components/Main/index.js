import React from 'react';
import Swiping from '../../pages/Swiping'
import Matches from '../../pages/Matches'
import { connect } from 'react-redux';
import { userLiked, userDisliked, pullInitialUsers, removeUserFromQueue } from '../../redux/actions';
import './index.scss'

const Container = ({ userLiked, userDisliked, pullInitialUsers, user }) => (
  <div className="mainContainer">
    <Swiping
      user={user}
      pullInitialUsers={pullInitialUsers}
      userLiked={userLiked}
      userDisliked={userDisliked}
    />
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
  showComponent: state.showComponent
});

const mapDispatchToProps = dispatch => ({
  removeUserFromQueue: () => {
    dispatch(removeUserFromQueue());
  },
  pullInitialUsers: (users) => {
    dispatch(pullInitialUsers(users));
  },
  userLiked: (user) => {
    dispatch(userLiked(user));
    dispatch(removeUserFromQueue());
  },
  userDisliked: (user) => {
    dispatch(userDisliked(user));
    dispatch(removeUserFromQueue());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

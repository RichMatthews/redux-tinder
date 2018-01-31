import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import '../../Firebase/config.js';
import Swiping from '../../pages/Swiping'
import SignUp from '../../pages/SignUp'
import SignIn from '../../pages/SignIn'
import Matches from '../../pages/Matches'

import { userLiked,
  userDisliked,
  pullInitialUsers,
  removeUserFromQueue,
  userLoggedIn,
  retrieveMatches,
  removeAlreadySeenUsersFromQueue,
  syncFirebaseToStore
  } from '../../redux/actions';
import './index.scss'

class Container extends React.Component {

  state = {
    isAuthenticated: false
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid, 'user');
      this.setState({isAuthenticated: true})
      console.log(this.state.isAuthenticated, 'auth?');
    } else {
      console.log('no user');
      }
    });
  }

  logout = () => {
    firebase.auth().signOut();
  }

  render(){
    const { userLiked, userDisliked, pullInitialUsers, users, userLoggedIn, retrieveMatches, removeAlreadySeenUsersFromQueue, syncFirebaseToStore } = this.props;
    return (
      <Router>
        <div className="mainContainer">
          <ul>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign in</Link></li>
            <li><Link to="/swiping">Swiping</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <button onClick={this.logout}>Logout</button>
          </ul>
          <Route
            path="/sign-up"
            render={() => (
              <SignUp
                userLoggedIn={userLoggedIn}
              />
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              <SignIn
                userLoggedIn={userLoggedIn}
              />
            )}
          />
          <Route
            path="/swiping"
            render={() => (
              <Swiping
                userLiked={userLiked}
                userDisliked={userDisliked}
                pullInitialUsers={pullInitialUsers}
                removeAlreadySeenUsersFromQueue={removeAlreadySeenUsersFromQueue}
                users={users}
                userLoggedIn={userLoggedIn}
                syncFirebaseToStore={syncFirebaseToStore}
              />
            )}
          />
          <Route
            path="/matches"
            render={() => (
              <Matches
                users={users}
                retrieveMatches={retrieveMatches}
              />
            )}
          />
        </div>
      </Router>
    )
  }
};

// <Route
//   path="/swiping"
//   render={() => (
//     <Swiping
//       userLiked={userLiked}
//       userDisliked={userDisliked}
//       pullInitialUsers={pullInitialUsers}
//       users={users}
//       userLoggedIn={userLoggedIn}
//     />
//   )}
// />

const PrivateRoute = ({ component: Component, ...rest, isAuthenticated }) => (
  <Route
    {...rest}
    render={(props) => (
    isAuthenticated ? (
      <Component {...props}/>
  ) : (
    <Redirect to={{
      pathname: '/sign-in',
      state: { from: props.location }
    }} />
    )
  )}/>
)

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
  },
  userLoggedIn: (user) => {
    dispatch(userLoggedIn(user));
  },
  retrieveMatches: (user) => {
    dispatch(retrieveMatches(user));
  },
  removeAlreadySeenUsersFromQueue: (user) => {
    dispatch(removeAlreadySeenUsersFromQueue(user));
  },
  syncFirebaseToStore: (firebaseData) => {
    dispatch(syncFirebaseToStore(firebaseData))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

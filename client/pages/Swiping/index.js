import React from 'react';
import Decisions from '../../components/Decisions';
import DisplayingUser from '../../components/DisplayingUser';
import firebase from 'firebase';
import '../../firebase/config.js';
import './index.scss';

class Swiping extends React.Component {

  componentDidMount = () => {
    this.pullFromDb('users/')
  }

  pullFromFirebase = (query) => {
    return new Promise((resolve, reject) => {
      firebase.database().ref(query).on('value', resolve);
    });
  }

  async pullFromDb(query) {
    const data = await this.pullFromFirebase(query)
    const users = Object.keys(data.val()).map(function(key) {
      return data.val()[key];
    })
    this.props.pullInitialUsers(users)
  }

  render(){
    const { userLiked, userDisliked, user } = this.props;
    const allUsers = this.context.store.getState().users.allUsers;
    return (
      <div className="swipingContainer">
        <DisplayingUser
          users={allUsers}
        />
        <Decisions
          user={user}
          userLiked={userLiked}
          userDisliked={userDisliked}
        />
      </div>
    )
  }
}

Swiping.contextTypes = {
  store: React.PropTypes.object.isRequired
}

export default Swiping;

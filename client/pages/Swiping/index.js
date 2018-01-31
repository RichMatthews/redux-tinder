import React from 'react';
import { connect } from 'react-redux';
import Decisions from '../../components/Decisions';
import DisplayingUser from '../../components/DisplayingUser';
import firebase from 'firebase';
import '../../Firebase/config.js';
import './index.scss';

class Swiping extends React.Component {
  state = {
    images: []
  }

  componentDidMount = () => {
    this.pullFromDb('users/');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.syncFirebaseToStore(user);
        // this.props.removeAlreadySeenUsersFromQueue(this.props.remainingUsers, this.props.usersLiked)
      } else {
        console.log('no user');
        }
      });
    // this.pullImages()
  }

  pullFromFirebase = (query) => {
    return new Promise((resolve, reject) => {
      firebase.database().ref(query).on('value', resolve);
    });
  }

  async pullImages() {
    var storageRef = firebase.storage().ref();
    for (var i=1; i <= 2; i++){
      const image = await storageRef.child(`images/${i}.jpg`).getDownloadURL()
      this.setState({images: [...this.state.images, image]})
    }
  }

  async pullFromDb(query) {
    const data = await this.pullFromFirebase(query)
    const users = Object.keys(data.val()).map(function(key) {
      return data.val()[key];
    })
    this.props.pullInitialUsers(users)
  }

  render(){
    const { images } = this.state;
    const { userLiked, userDisliked, users, removeAlreadySeenUsersFromQueue } = this.props;
    return (
      <div className="swipingContainer">
        <DisplayingUser
          users={users.allUsers}
          images={images}
        />
        <Decisions
          users={users}
          userLiked={userLiked}
          userDisliked={userDisliked}
        />
        <button onClick={() => removeAlreadySeenUsersFromQueue(this.props.remainingUsers, this.props.usersLiked)}>Remove users</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps
)(Swiping);

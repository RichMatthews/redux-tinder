import React from 'react';
import firebase from 'firebase';
import '../../Firebase/config.js';
import Image from '../Image'
import Heart from '../../../images/greenheart.png'
import './index.scss';

class Decisions extends React.Component{

  writeUserData = (currentUserId, displayedUser, decision) => {
    firebase.database().ref('users/' + currentUserId + `/${decision}/` + displayedUser.id).set({
      username: displayedUser.username,
      email: displayedUser.email
    });
  }

  addToFirebase = (displayedUser, decision) => {
    const currentUser = firebase.auth().currentUser;
    this.writeUserData(currentUser.uid, displayedUser, decision)
    this.checkForMatch(currentUser, displayedUser)
  }

  async checkForMatch (currentUser, displayedUser) {
    const likedUsers = await this.pullFromFirebase(displayedUser);
    likedUsers.map((user) => {
      if (user.id == currentUser.uid) {
        console.log('match!');
      }
      else {
        console.log('no match this time');
      }
    })
  }

  pullFromFirebase = (displayedUser) => {
    return new Promise((resolve, reject) => {
      firebase.database().ref('users/' + displayedUser.id + '/usersLiked/').once('value').then((snapshot) => {
        if (snapshot) {
          const users = Object.keys(snapshot.val()).map((key) => {
            return snapshot.val()[key];
          })
          resolve(users)
        }
        else {
          console.log('error: no path');
        }
      });
    })
  }

  render() {
    const { userLiked, userDisliked, users } = this.props;
     return(
       <div className="decisionContainer">
         <div className="userDislikedBtn" onClick={() => {
          userDisliked(users.allUsers[0]); this.addToFirebase(users.allUsers[0], 'userDisliked')
         }}>
           <img src={require('../../../images/redcross.png')} />
         </div>
         <div className="userSuperlikedBtn">
           <img src={require('../../../images/superlike.png')} />
         </div>
         <div className="userDislikedBtn" onClick={() => {
          userLiked(users.allUsers[0]); this.addToFirebase(users.allUsers[0], 'usersLiked')
         }}>
           <img src={require('../../../images/greenheart.png')} />
         </div>
       </div>
    )
  }
};

export default Decisions;

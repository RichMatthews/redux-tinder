import React from 'react';
import { HashRouter as Router } from 'react-router';
import firebase from 'firebase';
import '../../Firebase/config.js';

class SignUp extends React.Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  writeToFirebase(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      id: userId,
      username: name,
      email: email
    });
  }

  handleSubmit = () => {
    const { name, email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      const user = firebase.auth().currentUser;
      this.props.userLoggedIn(user.uid);
      this.writeToFirebase(user.uid, name, email)
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, 'error');
    });
  }

  handleFirstname = (e) => {
    this.setState({name: e.target.value})
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="firstname"
            onChange={this.handleFirstname}
          />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleEmail}
          />
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePassword}
          />
          <button> Sign Up </button>
        </form>
      </div>
    )
  }
}

export default SignUp;

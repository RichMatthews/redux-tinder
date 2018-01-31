import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import '../../Firebase/config.js';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, 'error');
    });
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    console.log(this.props.users, 'all the users');
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="firstname"
            onChange={this.handleEmail}
          />
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePassword}
          />
          <button> Sign In </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(SignIn);

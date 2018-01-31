import React from 'react';
import firebase from 'firebase';
import '../../Firebase/config.js';

class Matches extends React.Component {

  state = {
    user: ''
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user: user}, () => {
          this.props.retrieveMatches(this.state.user.uid)
        })
      }
    });
  }

  render() {
    const { users, retrieveMatches } = this.props;
    return(
      <div>
        {users.matches &&
          users.matches.length > 0 &&
          users.matches.map((user) => (
            <div> {user.id} </div>
        ))}
      </div>
    )
  }
}
export default Matches;

import React from 'react';
import './index.scss'

class User extends React.Component {

  state = {
    photoNumber: 0
  }

  nextPhoto = () => {
    this.setState({photoNumber: this.state.photoNumber + 1})
  }

  render(){
    const { users, images } = this.props;
    const { photoNumber } = this.state;
    return (
      <div className="displayContainer">
        {users &&
         users.length > 0 &&
         users[0].username ?
         <div>
           <img className="userImage" src={images[photoNumber]} alt="no image yet"/>
           <button onClick={() => this.nextPhoto()}>next</button>
           <div>{users[0].username}, {users[0].age}</div>
         </div>
         :
         <div>
          {'Sorry, no new people in your area'}
         </div>
        }
      </div>
    )
  }
}

export default User;

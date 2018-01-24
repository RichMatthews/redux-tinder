import React from 'react';
import './index.scss'

const User = ({ users }) => (
  <div className="displayContainer">
    {users &&
     users.length > 0 &&
     users[0].name ?
     <div>
       <div className="userImage">image</div>
       <div>{users[0].name}, {users[0].age}</div>
     </div>
     :
     <div>
      {'Sorry, no new people in your area'}
     </div>
    }
  </div>
)

export default User;

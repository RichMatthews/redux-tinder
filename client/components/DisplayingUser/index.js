import React from 'react';

const User = ({ users }) => (
  <div>
    {users &&
     users.length > 0 &&
     users[0].name ?
     <div>{users[0].name}, {users[0].age}</div>
     :
     'Sorry, no new people in your area'
    }
  </div>
)

export default User;

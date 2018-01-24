import React from 'react';
import Image from '../Image'
import Heart from '../../../images/greenheart.png'
import './index.scss';

class Decisions extends React.Component {
  render(){
    const { userLiked, userDisliked, user } = this.props;
    const allUsers = this.context.store.getState().users.allUsers;
    return(
      <div className="decisionContainer">
        <button onClick={() => userDisliked(allUsers[0])}>
          <img src={require('../../../images/redcross.png')} width="20px" height="20px"/>
        </button>
        <button>
          <img src={require('../../../images/superlike.png')} width="20px" height="20px"/>
        </button>
        <button onClick={() => userLiked(allUsers[0])}>
          <img src={require('../../../images/greenheart.png')} width="20px" height="20px"/>
        </button>
      </div>
    )
  }
}

export default Decisions;

Decisions.contextTypes = {
  store: React.PropTypes.object.isRequired
}

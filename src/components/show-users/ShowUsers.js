import React, {Component} from 'react';
import './ShowUsers.css'
import User from "../user/User";

class ShowUsers extends Component {
  render() {
    const {allUsers, user} = this.props
    if (user) {
      return (
          <div className='users1-wrapper'>
            {user.map(user => <User user={user} key={user.id}/>)}
          </div>
      );

    } else {
      return (
          <div className='users1-wrapper'>
            {allUsers.map(user => <User user={user} key={user.id}/>)}
          </div>
      );

    }
  }
}

export default ShowUsers;
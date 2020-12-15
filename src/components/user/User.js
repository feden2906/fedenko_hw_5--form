import React, {Component} from 'react';
import './User.css'

class User extends Component {
  render() {
    const {user: {id, name, username, email, phone, website}} = this.props
    return (
        <div className='chosen-user'>
          <p><b>ID : {id}</b></p>
          <p className='fs25'>{name}</p>
          <p className='fs14'>{username}</p>
          <hr className='hr'/>
          <p><b>Email: </b>{email}</p>
          <hr className='hr'/>
          <p><b>Phone: </b>{phone}</p>
          <hr className='hr'/>
          <p><b>Website: </b>{website}</p>
        </div>
    );
  }
}

export default User;
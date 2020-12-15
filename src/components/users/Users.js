import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../../services/TakeDataFromAPI";


class Users extends Component {
  state = {users: null, chosenUser: null}


  render() {
    return (
        <div className='users-wrapper'>
          <h2 className='text-users'>Users</h2>
          <div className='all-block'>
            <FilterForm/>
          </div>
        </div>
    )
  }
}

  export default Users;
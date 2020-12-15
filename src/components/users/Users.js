import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../../services/TakeDataFromAPI";
import FilterForm from "../filter-form/FilterForm";
import {withRouter} from "react-router-dom";
import ShowUsers from "../show-users/ShowUsers";
import Loading from "../../services/loading/Loading";

class Users extends Component {

  state = {formInputValue: null, allUsers: null, user: null}

  componentDidMount() {
    const {match:{url}} = this.props
    TakeDataFromAPI(url)
        .then(allUsers => this.setState({allUsers}))
  }

  formUsers = React.createRef()

  findID = (e) => {
    const {formInputValue: num, allUsers} = this.state
    e.preventDefault()
    const formInputValue = this.formUsers.current[0].value
    this.setState({formInputValue})
    if (allUsers && num) {
      const user = allUsers.filter(user => String(user.id).includes(num))
      this.setState({user})
    }
  }

  render() {
    const {allUsers, user} = this.state
    return (
<<<<<<< HEAD
        <div className='users-wrapper'>
          <h2 className='text-users'>Users</h2>
          <div className='all-block'>
            <FilterForm find={this.findID} formUsers={this.formUsers}/>
          </div>
          {allUsers ? <ShowUsers user={user} allUsers={allUsers}/> : <Loading/>}
=======
        <div>

>>>>>>> master
        </div>
    )
  }
}

  export default withRouter(Users);
import React, {Component} from 'react';
import './FilterForm.css'

class FilterForm extends Component {


  render() {
    const {find, formUsers} = this.props
    return (
        <form ref={formUsers} onSubmit={find} className='filter-form'>
          <h3 className='m10'><b>Форма</b></h3>
          <div className='m10'>
            <span>ID користувача :</span>
            <input type="number" onChange={find} className='num-input'/>
          </div>
          <button className='m10'>Пошук</button>
        </form>
    );
  }
}

export default FilterForm;
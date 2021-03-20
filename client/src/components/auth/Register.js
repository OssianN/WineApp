import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from "../../actions/authActions";

const Register = props => {
  const [ inputValue, setInputValue ] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const history = useHistory();

  const handleChange = e => {
    const name = e.target.name;
    setInputValue({
      ...inputValue,
      [name]: e.target.value,
    })
  }

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(inputValue, history))
  }

  return (
    <>
    <h1 className="header">This is the wine we whine about</h1>
    <form onSubmit={handleSubmit} className='auth-form'>
      <input
        className='auth-form__input'
        onChange={handleChange}
        name='name' value={inputValue.name}
        placeholder='name'>
      </input>
      <input
        className='auth-form__input'
        onChange={handleChange}
        name='email'
        value={inputValue.email}
        placeholder='email'>
      </input>
      <input
        className='auth-form__input'
        onChange={handleChange}
        name='password'
        value={inputValue.password}
        placeholder='password'
        type='password'>
      </input>
      <input
        className='auth-form__input'
        onChange={handleChange}
        name='password2'
        value={inputValue.password2}
        placeholder='repeat password'
        type='password'>
      </input>
      <button
        className='auth-form__submit-button btn--enforced'
        type="submit">
          register
      </button>
    </form>
    </>
  )
}

export default Register;
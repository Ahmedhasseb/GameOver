import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';
import login from './login.module.scss';
import logo from './logo.png';
import { Link } from 'react-router-dom';


export default function Login({saveData}) {

  const [userData, setuserData] = useState({

   
    email: "",
    password: "",
  });

  let nagitive = useNavigate();
  const [errorList, seterrorList] = useState([]);
  const [errorMsg, seterrorMsg] = useState('');
  let submit = async (e) => {
    e.preventDefault();
    let valdtion = valdtionValue();
    console.log(valdtion)
    if (valdtion.error) {
      seterrorList(valdtion.error.details);
    }
    else {
      let { data } = await axios.post("https://route-movies-api.vercel.app/signin", userData)
      console.log(data)
      if (data.message == 'success') {
        localStorage.setItem('token',data.token)
        saveData()
        getToLogin();

      }
      else {
        seterrorMsg(data.message)
      }
    }
  }
  let getToLogin = () => {
    nagitive('/')
  }
  let valdtionValue = () => {
    let schema = joi.object({
      
      email: joi.string().required().email({ tlds: { allow: ['com', 'net'] } }).messages({
        'string.empty': 'Email is required',
        'string.min': 'Enter valid email'

      }),
      password: joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/)).messages({
        'string.empty': 'Password is required',
        'string.min': 'Enter valid email'
      }),
    })
    return schema.validate(userData, { abortEarly: false })



  }

  let getValue = (e) => {
    let user = { ...userData };
    user[e.target.name] = e.target.value;
    setuserData(user);



  }

  return (
    <><div className="row">
      <div className="col-md-6 p-0 m-0">
        <div className={ ` ${login.img}`}>
          

        </div>
      </div>
      <div className={`col-md-6 ${login.bg}`}>
<div className="logo text-center">
  <img className='w-25' src={logo} alt="" />
  <h2>Log in to GameOver</h2>
  {errorMsg ? (<div className='alert alert-danger' >{errorMsg}</div>) : ('')}
</div>
        <form onSubmit={submit}>
          <label htmlFor="email"></label>
          <input onChange={getValue} className='form-control' type="email" placeholder='Email' name='email' />
          <label htmlFor="password"></label>
          <input onChange={getValue} className='form-control' type="password" placeholder='password' name='password' />
          <button className='form-control mt-3 bg-secondary'>Login</button>


        </form>
        <div className='line w-100  mt-5  '></div>
        <div className='text-center mt-5'>
        <Link className='blue' to=''>Forgot Password?</Link>
       <p>Not a member yet? <Link className='blue' to='regaister'>Create Account</Link></p>
        </div>

      </div>

      </div></>
  )
}



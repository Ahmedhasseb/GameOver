import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import reagister from './Reagaister.module.scss';
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from 'react-router-dom';




export default function Reagaister() {
  const [userData, setuserData] = useState({

    first_name: "",
    last_name: "",
    age: "",
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
      let { data } = await axios.post("https://route-movies-api.vercel.app/signup", userData)
      if (data.message == 'success') {
        getToLogin();

      }
      else {
        seterrorMsg(data.message)
      }
    }




  }
  let getToLogin = () => {
    nagitive('/login')
  }
  let valdtionValue = () => {
    let schema = joi.object({
      first_name: joi.string().alphanum().required().min(3).max(10).messages({
        'string.empty': 'First name is required',
        'string.min': 'First Name length must be between 3 to 10 character'
      }
      ),
      last_name: joi.string().alphanum().required().min(3).max(10).messages({
        'string.empty': 'Last name is required',
        'string.min': 'Last Name length must be between 3 to 10 character'


      }),
      age: joi.number().required().min(16).max(60).messages({
        'number.base': 'Age is required',
        'number.min': 'Age over 16 years old'
      }),
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
    <>
      <div className={`row mt-5 shadwo-lg `}>
        <div className="col-md-6 m-0 p-0">

          <div className={`imgs ${reagister.img}`}>

          </div>

        </div>
        <div className={`col-md-6 ${reagister.bg}`}>
          <h2 className='text-center mt-4'>Create My Account!</h2>
          {errorMsg ? (<div className='alert alert-danger' >{errorMsg}</div>) : ('')}

          <div className="forms">
            <form onSubmit={submit}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="first_name"></label>
                  
                  <input className={`form-control mt-1 ${reagister.back} `} onChange={getValue} type="text" placeholder='First Name' name='first_name' />
                  {errorList.filter(err => err.context.label == 'first_name')[0]?<div className='alert alert-danger  p-0 m-1'> <p>{errorList.filter(err => err.context.label == 'first_name')[0]?.message}</p></div>:''}
                 
                 
                  

                </div>
                <div className="col-md-6">
                  <label htmlFor="last_name"></label>
                  <input className={`form-control mt-1 ${reagister.back} `} onChange={getValue} type="text" placeholder='Last Name' name='last_name' />
                  {errorList.filter(err => err.context.label == 'last_name')[0]?<div className='alert alert-danger  p-0 m-1'> <p>{errorList.filter(err => err.context.label == 'first_name')[0]?.message}</p></div>:''}
                </div>
              </div>
              <label htmlFor="email "></label>
              <input className={`form-control mt-1 ${reagister.back} `} onChange={getValue} type="email" placeholder='Email Address' name='email' />
              {errorList.filter(err => err.context.label == 'email')[0]?<div className='alert alert-danger  p-0 m-1'> <p>{errorList.filter(err => err.context.label == 'first_name')[0]?.message}</p></div>:''}
              <label htmlFor="age"></label>
              <input className={`form-control mt-1 ${reagister.back} `} onChange={getValue} type="number" placeholder='Age' name='age' />
              {errorList.filter(err => err.context.label == 'first_name')[0]?<div className='alert alert-danger  p-0 m-1'> <p>{errorList.filter(err => err.context.label == 'age')[0]?.message}</p></div>:''}
              <label htmlFor="password"></label>
              <input className={`form-control  mt-1 ${reagister.back} `} onChange={getValue} type="password" placeholder='password' name='password' />
              {errorList.filter(err => err.context.label == 'first_name')[0]?<div className='alert alert-danger  p-0 m-1'> <p>{errorList.filter(err => err.context.label == 'password')[0]?.message}</p></div>:''}
              <button className={`form-control mt-3 bg-secondary ${reagister.creat}`}>Create Acount</button>
            </form>
            <div className='mt-2'>
              <Link> <p className='text-center'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p></Link>
              <div className={`line w-100 `}></div>
              <p className='text-center mt-4'>Already a member? <Link className='blue' to='login'>Log in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
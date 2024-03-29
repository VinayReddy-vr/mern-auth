import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Oauth from '../components/Oauth';


const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
      setFormData({...formData, [e.target.id]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    setLoading(true)
    setError(false)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(formData)});
      console.log(res.ok)
    setLoading(false);
    if(res.ok)
      {
        setFormData({});
        navigate('/sign-in');
      } else {
        setError(true);
      }
    
  }
  catch(err)
  {
     setLoading(false);
     setError(true);
     console.log(err);
  }
   }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold
      my-7' >Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='UserName' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='Email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading?'loading':"Sign Up"}</button>
        <Oauth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in' ><span className='text-blue-500 '>Sign In</span></Link>
      </div>
      <p className='text-red-500 mt-5'>{error && 'Something went wrong'}</p>
    </div>
  )
}

export default SignUp
import React from 'react'
import { signInWithGoogle } from '../firebase/auth-config'


const AuthGoogle = () => {
  return (
    <>
    <button className='bg-blue-400 cursor-pointer' onClick={signInWithGoogle}> SignIn With Google</button>
    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src={localStorage.getItem("profilePic")} alt="ProfilePic" referrerPolicy="no-referrer" className="w-50 h-50 rounded-full"/>
    
    </>
  )
}

export default AuthGoogle
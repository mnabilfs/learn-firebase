import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from "../firebase/auth-config";

const Auth = () => {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({})
  onAuthStateChanged(authentication, (currentUser) => {
    setUser(currentUser)
  })
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(authentication, registerEmail, registerPassword)
      console.log(user);
      
    } catch (error) {
      console.log(error);
      
    }

  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
      console.log(user);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  const logout = async () => {
    await signOut(authentication)
  };

  return (
    <>
      <div>
        <h3>Register User</h3>
        <input type="text" placeholder="Email" className="border-1" onChange={(event) => {setRegisterEmail(event.target.value)}} />
        <input type="text" placeholder="Password" className="border-1" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
        <button type="submit" className="bg-blue-400 cursor-pointer" onClick={register}>
          Submit
        </button>
      </div>

      <div>
        <h3>Login User</h3>
        <input type="text" placeholder="Email" className="border-1" onChange={(event) => {setLoginEmail(event.target.value)}}/>
        <input type="text" placeholder="Password" className="border-1" onChange={(event) => {setLoginPassword(event.target.value)}}/>
        <button type="submit" className="bg-blue-400 cursor-pointer" onClick={login}>
          Login
        </button>
      </div>
      <div>
        <h4>User Logged In: </h4>
        {user?.email}
        <button type="submit" className="bg-blue-400 cursor-pointer" onClick={logout}>Sign Out</button>
      </div>
    </>
  );
};

export default Auth;

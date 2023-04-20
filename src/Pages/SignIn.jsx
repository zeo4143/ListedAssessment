import React from "react";
import { signInWithGoogle } from "../Firebase";
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'

export default function SignIn() {

  const navigate = useNavigate()

  function handleSubmit() {
      navigate("/Admin/Dashboard")
  }
  return (
    <div className="mainPage">
      <div className="firsthalf">
        <h1 style={{ fontSize: "72px" }}>Board.</h1>
      </div>

      <div className="secondhalf">
        <div className="signIn-details">
          <div>
            <h1 className="signIn-text">Sign In</h1>
            <span className="signIn-text">Sign in to your account</span>
          </div>

          <div className="auth">
            <button className="auth-details" onClick={signInWithGoogle}>
              <FcGoogle />
              <p style={{ fontSize: "12px", fontWeight: "normal" }}>
                Sign in with Google
              </p>
            </button>
            <button className="auth-details">
              <AiFillApple />
              <p style={{ fontSize: "12px", fontWeight: "normal" }}>
                Sign in with Apple
              </p>
            </button>
          </div>

          <div className="registration">
            <form onSubmit={handleSubmit} className="SignIn-form">
              <div className="input-field">
                <input
                  required
                  className="input"
                  type="text"
                  name="email"
                  // autoComplete="off"
                  placeholder="Email address"
                />
                <label htmlFor="email" className="input-label">
                  Email address
                </label>
              </div>
              <div className="input-field">
                <input
                  required
                  className="input"
                  type="password"
                  name="password"
                  // autoComplete="off"
                  placeholder="Password"
                />
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <Link><p style={{ margin: "1rem" }}>Forgot password?</p></Link>
              </div>
              <input className="input-button" type="submit" value="Sign In" />
            </form>
            <span style={{ color: "#858585" }}>
              Dont have an account? <Link>Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

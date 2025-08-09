import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div class=" login-container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div class="d-grid">
                <button class="btn btn-outline-primary btn-login text-uppercase fw-bold" type="submit">Sign in</button>
                <button class="btn btn-outline-danger btn-login text-uppercase fw-bold mt-2" type="reset">Reset</button>
              </div>  

              <div className="mt-4">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </div>
                        
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login;
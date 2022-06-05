import React from 'react'

export const Login = () => {
  return (
    <form>
        <h1>Login Here</h1>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control"  aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label" >Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

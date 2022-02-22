import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../store/context'
import './Login.css';
import { useNavigate } from "react-router-dom";



function Login() {
  const initialValue = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    setFormErrors(validate(email, password))
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate('/')
      setIsSubmit(true)
    }).catch((error) => {
      alert(error.message)
    })
  }
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(email, password)
    }

  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const nameRegex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    const regex = new RegExp(nameRegex)
    if (!email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format"
    }
    if (!password) {
      errors.password = "Password is required"
    } else if (values.password < 8) {
      errors.password = "Password must be more than 8 characters"
    } else if (values.password > 20) {
      errors.password = "Password cannot exceed morethan 20 characters"
    }
    return errors
  }

  return (
    <div>
      <div className="loginParentDiv">
        {/* <img width="200px" height="200px" src={Logo}></img> */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className=' ui message success'>Signed in successfully</div>) : ""}
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <p>{formErrors.email}</p>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <p>{formErrors.password}</p>
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;

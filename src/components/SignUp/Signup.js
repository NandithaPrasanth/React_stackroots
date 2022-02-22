import React, { useState,useContext,useEffect } from 'react';
import { FirebaseContext } from '../../store/context';
import { useNavigate } from "react-router-dom";
import './Signup.css';

export default function Signup() {
  const initialValue = { username:'',email: '',phone:'', password: '' }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit,setIsSubmit]=useState(false)
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    setFormErrors(validate(username,email,phone, password))
           
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
         
        }).then(()=>{

           navigate('/login')
           setIsSubmit(true)
        })
      })
    })
  }
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit)
    {
      console.log(email,password)
    }

  },[formErrors])
  const validate = (values) => {
    const errors = {}
    const nameRegex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    const regex=new RegExp(nameRegex)
    if(!username){
      errors.username = "User name is required"
    }
    if (!email) {
      errors.email = "Email is required"
    }else if(!regex.test(values.email))
    {
      errors.email="This is not a valid email format"
    }
    if(!phone){
      errors.phone="Phone number is required"
     
    }else if(values.phone<10){
      errors.phone="Phone number must be valid"
    }else if (values.phone>10){
      errors.phone="10 digit number required"
    }
    if (!password) {
      errors.password = "Password is required"
    }else if(values.password <8 )
    {
      errors.password="Password must be more than 8 characters"
    }else if(values.password >20 )
    {
      errors.password="Password cannot exceed morethan 20 characters"
    }
    return errors
  }

  return (
    <div>
      <div className="signupParentDiv">
      {Object.keys(formErrors).length===0 && isSubmit ? (<div className=' ui message success'>Signed in successfully</div>) :""}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <p>{formErrors.username}</p>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
           onChange= {(e) => setEmail(e.target.value)
           }
            id="fname"
            name="email"
            defaultValue="John"
          />
          <p>{formErrors.email}</p>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
           onChange= {(e) => setPhone(e.target.value)}
           
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <p>{formErrors.phone}</p>
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
          <button>Signup</button>
        </form>
        <a href='/login'>Login </a>
      </div>
    </div>
  );
}

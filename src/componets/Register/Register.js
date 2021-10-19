import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'
import googleImg from '../../images/google.png'

const Register = () => {
    const {signInWithGoogle, createUser, error}=useAuth();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
  const handleForm=(e)=>{
    e.preventDefault();
  }
  
  const handleName=e=>{
    setName(e.target.value);
    console.log(e.target.value)
  }
   const handleEmailChange =e=>{
     setEmail(e.target.value);
     console.log(e.target.value)
   }
   const handlePasswordChange =e=>{
     setPassword(e.target.value);
     console.log(e.target.value)
   }
    return (
        <div className="login mx-auto">
            <div>
                
            <Form className="container m-5 ms-1" onSubmit={handleForm}>
            <h1 className="text-info fs-3">Please Register</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleName} type="name" placeholder="name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Link to="/login">
   <button className="btn">Already registered?</button></Link>
  </Form.Group>
        <div>
            <h6 className="text-danger">{error}</h6>
        </div>
  <Button onClick={ () => createUser (name,email, password)} className="login-btn btn" variant="primary" type="submit">
    Register 
  </Button>
</Form>
        <div>
            <h6 className="d-flex align-items-center">---------------Or---------------</h6>
            <div className="">
            <button  onClick={signInWithGoogle} className="btn googleSign"> <img src={googleImg} alt="" /> Sign in with Google</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Register;
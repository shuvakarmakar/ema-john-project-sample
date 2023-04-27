import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        // console.log(event);
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        if(password !== confirm){
            setError('Your Password Did Not Match');
            return;
        }
        else if(password.length < 6){
            setError('Password Must Be 6 Charecters')
            return
        }

        //Call createUser 
        createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
          })
          .catch((error) => {
            console.log(error);
          });
    }


    return (
        <div className='form-container'>
            <h2 className='login-title'>Login</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an Account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;
import React from 'react';

import Button from '../UI/Button';

import classes from './LoginForm.module.css';

const LoginForm = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setUserPass(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        console.log('submit handler!');
        props.onCloseModal();
    };

    return (
        <form className={classes.login_form} onSubmit={submitHandler}>
            <label htmlFor="email">e-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />

            <Button type='submit'>Log in</Button>
        </form>
    );
};

export default LoginForm;
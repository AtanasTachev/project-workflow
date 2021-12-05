import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authSevice from '../../../services/authService';
import { AuthContext } from '../../../contexts/AuthContext';

import './form.css';

const Register = () => {

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let specialty = formData.get('specialty');
        let title = formData.get('title');
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        if (password !== repeatPassword) {
            return;
        }

        authSevice.register(specialty, title, firstName, lastName, email, password, repeatPassword)
        .then(authData => {
            login(authData);
            navigate('/');
        });

    }


    return (
        // <h2> This is the register form </h2>)
<section id="register-page">
    <div className="signupSection">
        <div className="info">
                <h2>To organize better your workflow and save time and effort while managing a project.</h2>
            </div>
        <form onSubmit={onRegisterHandler} method="POST" className="signupForm">
            <h2>Sign Up</h2>
            <ul className="noBullet">
                <li>
                    <label htmlFor="specialty">Specialty:</label>
                    <select name="specialty" id="specialty" className="inputFields">
                          <option value="Arch">Arch</option>
                          <option value="Struct">Struct</option>
                          <option value="WSS">WSS</option>
                          <option value="El">El</option>
                          <option value="HVAC">HVAC</option>
                          <option value="FS">FS</option>
                          <option value="LS">LS</option>
                          <option value="GD">GD</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="title">Title:</label>
                    <select name="title" id="title" className="inputFields">
                          <option value="arch.">arch.</option>
                          <option value="eng.">eng.</option>
                          <option value="l.arch.">l.arch.</option>
                    </select>

                </li>
                <li>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" className="inputFields" id="first-name" name="firstName" placeholder="Andrey" />
                </li>
                <li>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" className="inputFields" id="last-name" name="lastName" placeholder="Georgiev" />
                </li>
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="inputFields" id="email" name="email" 
                        placeholder="andrey@gmail.com" />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="inputFields" id="password" name="password" placeholder="******" />
                </li>
                <li>
                    <label htmlFor="repeat-password">Repeat-Password:</label>
                    <input type="password" className="inputFields" id="repeat-password" name="repeatPassword" placeholder="******" />
                </li>
                <li id="center-btn">
                    <button type="submit" id="join-btn">Register</button>
                </li>
            </ul>
        </form>
    </div>
</section>) 
}

export default Register
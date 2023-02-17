import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useNotificationContext, types } from '../../../contexts/NotificationContext'
import { AuthContext } from '../../../contexts/AuthContext';
import * as authSevice from '../../../services/authService';
import './form.css';


const Login = () => {

    const { login } = useContext(AuthContext); 

    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();


    const onLoginHandler = (e) => {

        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authSevice.login(email, password)
        .then((authData) => {
            login(authData);
            addNotification('You logged in successfully', types.success)
            navigate('/');
        })
        .catch(error => {
            addNotification('Invalid username or password', types.warn)
            console.log({message: error.message});
        })

    }

    return (

<section id="login-page">

    <div className="loginSection">
        <div className="info">
            <h2>Welcome, Ready to do some work?!</h2>
            <p>See how things are at this moment.</p>
        </div>
        <form method="POST" className="loginForm" onSubmit={onLoginHandler}>
            <h2>Login</h2>
            <ul className="noBullet">
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="inputFields" id="email" name="email" placeholder="andrey@gmail.com" />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="inputFields" id="password" name="password" placeholder="*******" />
                </li>

                <li id="center-btn">
                    <button id="login-btn">Login</button>
                </li>
            </ul>
        </form>
    </div>

</section>
    )
}

export default Login
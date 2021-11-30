import { useNavigate } from 'react-router-dom';

import * as authSevice from '../../services/authService';
import '../../register-login.css';

const Register = ({onRegister}) => {

    const navigate = useNavigate();

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

        let userData = {
            specialty,
            title,
            firstName,
            lastName,
            email,
            password
        } 
        // console.log(userData);
        authSevice.register(userData);
        // .then(result => {
        //     navigate('/');
        // });

        onRegister(userData);
        navigate('/');
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
                    <input type="text" className="inputFields" id="specialty" name="specialty" placeholder="Arch" />
                </li>
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="inputFields" id="title" name="title" placeholder="arch" />
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
                    <button id="join-btn">Join</button>
                </li>
            </ul>
        </form>
    </div>
</section>) 
}

export default Register
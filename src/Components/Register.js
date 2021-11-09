import '../register-login.css';

const Register = () => {
    return (
        // <h2> This is the register form </h2>)
<section id="register-page">
    <div className="signupSection">
        <div className="info">
                <h2>To organize better your workflow and save time and effort while managing a project.</h2>
            </div>
        <form action="register" method="POST" className="signupForm">
            <h2>Sign Up</h2>
            <ul className="noBullet">
                <li>
                    <label for="title">Title:</label>
                    <input type="text" className="inputFields" id="title" name="title" value="" placeholder="arch" />
                </li>
                <li>
                    <label for="first-name">First Name:</label>
                    <input type="text" className="inputFields" id="first-name" name="firstName" value="" placeholder="Andrey" />
                </li>
                <li>
                    <label for="last-name">Last Name:</label>
                    <input type="text" className="inputFields" id="last-name" name="lastName" value="" placeholder="Georgiev" />
                </li>
                <li>
                    <label for="email">Email:</label>
                    <input type="text" className="inputFields" id="email" name="email" value=""
                        placeholder="andrey@gmail.com" />
                </li>
                <li>
                    <label for="password">Password:</label>
                    <input type="password" className="inputFields" id="password" name="password" placeholder="******" />
                </li>
                <li>
                    <label for="repeat-password">Repeat-Password:</label>
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
import '../register-login.css';

const Login = () => {

    return (

<section id="login-page">

    <div class="loginSection">
        <div class="info">
            <h2>Welcome, Ready to to some work?!</h2>
            <p>See how things are at this moment.</p>
        </div>
        <form action="/login" method="POST" className="loginForm">
            <h2>Login</h2>
            <ul class="noBullet">
                <li>
                    <label for="email">Email:</label>
                    <input type="text" className="inputFields" id="email" name="email" placeholder="andrey@gmail.com" />
                </li>
                <li>
                    <label for="password">Password:</label>
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
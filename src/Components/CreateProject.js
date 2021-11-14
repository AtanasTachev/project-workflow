import '../register-login.css';

const CreateProject = () => {

    return (

<section id="login-page">

    <div class="loginSection">
        <div class="info">
            <h2>Welcome, Ready to do some work?!</h2>
            <p>See how things are at this moment.</p>
        </div>
        <form action="/create-project" method="POST" className="loginForm">
            <h2>Login</h2>
            <ul className="noBullet">
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="inputFields" id="title" name="title" placeholder="My Project" />
                </li>
                <li>
                    <label htmlFor="contractor">Password:</label>
                    <input type="text" className="inputFields" id="contractor" name="contractor" placeholder="Contractor" />
                </li>
                <li>
                    <label htmlFor="location">Password:</label>
                    <input type="text" className="inputFields" id="location" name="location" placeholder="Location" />
                </li>
                <li>
                    <label htmlFor="startDate">Password:</label>
                    <input type="text" className="inputFields" id="startDate" name="startDate" placeholder="Start Date" />
                </li>
                <li>
                    <label htmlFor="dueDate">Password:</label>
                    <input type="text" className="inputFields" id="dueDate" name="dueDate" placeholder="Due Date" />
                </li>
                <li>
                    <label htmlFor="imageUrl">Password:</label>
                    <input type="text" className="inputFields" id="imageUrl" name="imageUrl" placeholder="Image Url" />
                </li>
                <li>
                    <label htmlFor="description">Password:</label>
                    <input type="text" className="inputFields" id="description" name="description" placeholder="Description" />
                </li>
                <li>
                    <label htmlFor="lead">Password:</label>
                    <input type="text" className="inputFields" id="lead" name="lead" placeholder="Lead" />
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

export default CreateProject
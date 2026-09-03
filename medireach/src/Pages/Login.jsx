import './Login.css';

function Login() {



    
    return (
        <div id="divLogin">
            <h1>Diagnostic Company</h1>
            <h3>Marketing Portal</h3>
            <label htmlFor="txtUserName">User name</label>
            <input id="txtUserName" />
            <label htmlFor="txtPassword">Password</label>
            <input id="txtPassword" type="password" />
            <button id="btnLogin" type="button">Login</button>
        </div>
    );
}

export default Login;
import React from "react";

function Signup() {
    return (
        <div class="login">
            <h1>Sign up</h1>
            <form class="signup">
                <input type="text" placeholder="Username" id="name-input" required="required" />
                <input type="email" placeholder="Email Address" id="email-input" required="required" />
                <input type="password" placeholder="Password" id="password-input" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Register</button>
                <div class="login-help">
                    <p>Already have an account? <a href="/login">Login</a>.</p>
                </div>
                <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span> <span class="msg"></span>
                </div>
            </form>
        </div>



    );
}

export default Signup;
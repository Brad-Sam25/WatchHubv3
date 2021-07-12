import React from "react";

function Login() {
    return (


        <div class="container">
    <div class="row">
      <div class="login">
        <h1>Watch Hub</h1>
        <form class="login">
          <input type="text" name="u" placeholder="Email" id="email-input" required="required" />
          <input type="password" name="p" placeholder="Password" id="password-input" required="required" />
          <button type="submit" class="btn btn-primary btn-block btn-large">Start Watching</button>
          <div class="login-help">
            <p>First time here? <a href="/signup">Create an account</a>.</p>
          </div>
          <div style="display: none" id="alert" class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span> <span class="msg"></span>
          </div>
        </form>
      </div>
    </div>
  </div>



    );
}

export default Login;
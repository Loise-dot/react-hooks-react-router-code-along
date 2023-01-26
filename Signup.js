import React from "react";

function Signup() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <br />
        <div>
          <input type="text" name="email" placeholder="email" />
        </div>
        <br />
        <div>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <br />
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
}
export default Signup;

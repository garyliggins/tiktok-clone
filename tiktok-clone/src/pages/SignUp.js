import { removeWhiteSpace } from "lib/validate";
import { useEffect, useState } from "react";

export default function SignUp({user}) {

  const [isTaken,setTaken] = useState(false);
  const [username,setUsername] = useState("");


  useEffect(() => {
    if (user) {
      console.log("User authenticated", user);
      const defaultUsername = removeWhiteSpace(user.user.displayName)
      setUsername(defaultUsername)
    }
  }, [user])

  return (
    <div className="signup-container">
      <header className="signup-header">
        <div className="signup-header-title">Sign up</div>
      </header>
      <form  className="signup-form">
        <div className="signup-form-inner">
          <div className="signup-form-title">Create username</div>
          <div className={`signup-input ${isTaken ? "signup-error" : ""}`}>
            <input value={username} type="text" name='email' placeholder="username"/>
            <div className="signup-error-icon"></div>
          </div>
          <div className="signup-error-text">{isTaken ? "This username is taken." : "You can always change this later."}</div>
        </div>
        <button className="signup-submit" disabled={isTaken}>Sign up</button>
      </form>
      
    </div>
  );
}

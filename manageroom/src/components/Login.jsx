import React, {useState} from 'react'
import "../reset.css"
import "../components/css/login.css"
import Logo from '../images/logo.PNG'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    if(email.length != 0 && password.length != 0){
      if(password.length > 5){
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            
            alert("successful login!")
            window.location.href = 'mypage'; // 通常の遷移
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }else{        
      }
      
    }else{
      if (email.length == 0) {
        alert("Please insert mailaddress to form")
      }
      if (password.length == 0) {
        alert("Please insert password to form")

      }
    }
    
  };
  const handleChangeEmail = (event) => {
    console.log(event.currentTarget.value)
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };


  


  return (
    <div className="formContainer">
       <form>
          <h1>Welcome back!</h1>
          <hr/>
          <div className="uiForm">
            <div className="formField">
              <label>MailAddress</label>
              <input type="text" placeholder="valid email address" name="mailaddress" onChange={(e) => handleChangeEmail(e)}/>
            </div>
            <div className="formField">
              <label>Password</label>
              <input type="password" placeholder="password" name="password" onChange={(e) => handleChangePassword(e)}/>
            </div>
            <div className="submitButton"  >
              <button onClick={handleSubmit} className="loginButton">Login</button>
            </div>
            <div className="border" />
            
            <div className='login'>
              <a href="register"><p>Don't you have account? click here!</p></a>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Login;



{/* <TODO>未入力の項目の下に赤文字で「未入力」と表示するプログラムを各</TODO> */}
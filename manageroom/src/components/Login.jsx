import React, {useState} from 'react'
import "../reset.css"
import "../components/css/login.css"
import Logo from '../images/logo.PNG'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    if(email.length != 0 && password.length != 0){
      if(password.length > 6){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
      }else{
        alert("enable password is from 5 words.")
        
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
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  
  
  function FromScreen(props){
    return(
      <div>
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <form>
          <h1>Hi there!</h1>
          <hr/>
          <div className="uiForm">
            <div className="formField">
              <label>MailAddress</label>
              <input type="text" placeholder="valid email address" name="email" onChange={(e) => handleChangeEmail(e)}/>
            </div>
            <div className="formField">
              <label>Password</label>
              <input type="text" placeholder="password" name="password" onChange={(e) => handleChangePassword(e)}/>
            </div>
            <div className="submitButton"  >
              <button onClick={handleSubmit}>Login</button>
            </div>
            <div className="border" />
            <div className='login'>
              <p>Don't you have account? Create here!</p>
            </div>
          </div>
        </form>
      </div>
    )
  }


  return (
    <div className="formContainer">
      <FromScreen/>
    </div>
  );
}

export default Login;



{/* <TODO>未入力の項目の下に赤文字で「未入力」と表示するプログラムを各</TODO> */}
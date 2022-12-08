import React, {useState} from 'react'
import "../reset.css"
import "../components/css/login.css"
import Logo from '../images/logo.PNG'

import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";


export const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayname,setDisplayName] = useState('no-name');
  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    if(email.length != 0 && password.length != 0){
      if(password.length > 5){
        if(displayname.length == 0){
          setDisplayName("CheckTeritoryUser")
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          window.location.href = 'mypage'; // 通常の遷移

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
    console.log(event.currentTarget.value)
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };



  


  return (
    <div className="formContainer">
       <form>
          <h1>Hi there!</h1>
          <hr/>
          <div className="uiForm">
          
            <div className="formField">
              <label>MailAddress</label>
              <input type="text" placeholder="valid email address" name="mailaddress" onChange={(e) => handleChangeEmail(e)}/>
            </div>
            <div className="formField">
              <label>Password</label>
              <input type="text" placeholder="password" name="password" onChange={(e) => handleChangePassword(e)}/>
            </div>
            <div className="submitButton"  >
              <button onClick={handleSubmit}>Create Account!</button>
            </div>
            <div className="border" />
            
            <div className='login'>
              <a href="login"><p>Do you have account? Login here!</p></a>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Register;


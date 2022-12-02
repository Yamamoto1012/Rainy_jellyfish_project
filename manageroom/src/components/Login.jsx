import React, {useState} from 'react'
import "../reset.css"
import "../components/css/login.css"
import Logo from '../images/logo.PNG'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export const Login = () => {
  const initialValues = { username: "", mailaddress: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const auth = getAuth();

  
  const handleChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //ログイン情報を送信する
    //バリデーションチェックをする
    setFormErrors(validate(formValues));
  };

  function confilmAccount(value){
    let emailBool = true;
    let passwordBool = true;

    if(emailBool && passwordBool){
      createUserWithEmailAndPassword(auth,formValues.mailaddress,formValues.password).then((userCredential) => {
        //Sign in
        const user = userCredential.user;
        console.log("SEIKO")
      }).catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }
  }

  const validate = (values) => {
    const errors = {};
    
    if (!values.username) {
      errors.username = "ユーザー名を入力してください";
      console.log(errors);
    }else{
    }
    if (!values.mailaddress) {
      errors.username = "メールアドレスを入力してください";
      console.log(errors);
    }
    if (!values.password) {
      errors.username = "パスワードを入力してください";
      console.log(errors);
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
      console.log(errors);
    } else if (values.password.length > 15 ) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
      console.log(errors);
    }

   
  };
  


  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr/>
        <div className="uiForm">
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailaddress" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="submitButton"  >
            <button onClick={confilmAccount(formValues)}>ログイン</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;



{/* <TODO>未入力の項目の下に赤文字で「未入力」と表示するプログラムを各</TODO> */}
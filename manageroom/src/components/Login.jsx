import React from 'react'
import "../reset.css"
import "../components/css/login.css"
import Logo from '../images/logo.PNG'

export const Login = () => {
  return <div classs="formContainer">
    <form >
      <h1>ログインフォーム</h1>
        <hr />
        <div class="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username"/>
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailaddress"/>
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password"/>
          </div>
          <button className="submitButton">ログイン</button>
        </div>
    </form>

  </div>
}

export default Login;
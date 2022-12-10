// import logo from './logo.svg';
import "./reset.css"
import "./App.css"


import { BrowserRouter, Link,  Route,Routes,useHistory,Redirect} from "react-router-dom";
import { AuthProvider, useAuthContext } from "./context/AuthContext";

import HomeScreen from "./components/Home"
import MainScreen from "./components/Main"
import JoinRoom from './components/JoinRoom';
import { Login } from "./components/Login";
import Register from "./components/Register";
import MyPage from "./components/MyPage";
import CreateRoom from "./components/CreateRoom";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsOwSbKGcevWf_NpnX3-nzWJc7ThcBBH4",
  authDomain: "kurageproject-apphack.firebaseapp.com",
  projectId: "kurageproject-apphack",
  storageBucket: "kurageproject-apphack.appspot.com",
  messagingSenderId: "289858188296",
  appId: "1:289858188296:web:08e08c2a99808cdc5a4dbd",
  measurementId: "G-09YV1Z8X0X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// プログラムの一番上、ヘッダー部分だけを実装するプログラム
function App() {
  const [firebaseCurrentAuth,setFirebaseCurrentAuth] = useState("ログイン");

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setFirebaseCurrentAuth(user.displayName);
      console.log(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
 

  const user = false;
  const Loginbutton = () =>{
 
    if(firebaseCurrentAuth=="ログイン"){
      return(
        <li class="header-item"><a href="auth/register">{firebaseCurrentAuth}</a></li>
      )
    }else{
      return(
        <li class="header-item"><a href="auth/mypage">{firebaseCurrentAuth}</a></li>
      )
    }
      
    
  }
  
  return (
    
    <BrowserRouter>
    <div className='App'>
      
      <header>
      
      <a href="/"><h1 class="header-logo">CheckTeritory</h1></a>
      <nav class="header-nav">
          <ul class="header-list">
            <Loginbutton/>
          </ul>
      </nav>
    </header>
      
      






      
      <Routes>
        <Route exact path="/" element={<JoinRoom/>}/>
          {/* /のアドレスが入力されたらHomeScreen（Home.jsx)に移動する */}

        <Route path='/main' element={<MainScreen/>}/>
          {/* /mainのアドレスが入力されたらMainScreen（Main.jsx)に移動する */}
        {/* <Route path='/join' element={<HomeScreen/>}/> */}
        <Route path="auth/login" element={<Login />}/>
        <Route path="auth/register" element={<Register/>}/>
        <Route path="auth/mypage" element={<MyPage/>} />
        <Route path="/create" element={<AuthProvider><CreateRoom/></AuthProvider>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

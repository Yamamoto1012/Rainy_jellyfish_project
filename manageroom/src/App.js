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
import LoadQR from "./components/LoadQR";
import Profile from "./components/Profile";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import { useState } from "react";

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
        <li class="header-item"><a href="/auth/register">{firebaseCurrentAuth}</a></li>
      )
    }else{
      return(
        <li class="header-item"><a href="/auth/mypage">{firebaseCurrentAuth}</a></li>
      )
    }
      
    
  }
  
  return (
    
    <BrowserRouter>
    <div className='App'>
      
      <header>
      
      <a href="/"><h1 class="header-logo">StudyBuddy</h1></a>
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
        <Route path="/loadqr" element={<LoadQR/>}/>
        <Route path="/create" element={<AuthProvider><CreateRoom/></AuthProvider>}/>
        <Route path="auth/Profile" element={<Profile/>}/>
        <Route path="auth/joinRoom" element={<JoinRoom/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import "./reset.css"
import "./App.css"


import { BrowserRouter, Link,  Route,Routes } from "react-router-dom";

import HomeScreen from "./components/Home"
import MainScreen from "./components/Main"
import JoinRoom from './components/JoinRoom';
import { Login } from "./components/Login";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
 
  return (
    <BrowserRouter>
    <div className='App'>
      <header>
      <h1 class="header-logo">CheckTeritory</h1>
        <nav class="header-nav">
            <ul class="header-list">
                <li class="header-item"><a href="/login">ログイン</a></li>
            </ul>
        </nav>
      </header>






      
      <Routes>
        <Route exact path="/" element={<JoinRoom/>}/>
          {/* /のアドレスが入力されたらHomeScreen（Home.jsx)に移動する */}

        <Route path='/main' element={<MainScreen/>}/>
          {/* /mainのアドレスが入力されたらMainScreen（Main.jsx)に移動する */}
        {/* <Route path='/join' element={<HomeScreen/>}/> */}
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import "./reset.css"
import "./App.css"


import { BrowserRouter, Link,  Route,Routes } from "react-router-dom";

import HomeScreen from "./components/Home"
import MainScreen from "./components/Main"
import JoinRoom from './components/JoinRoom';
import Home from "./components/Home";

// プログラムの一番上、ヘッダー部分だけを実装するプログラム
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <header>
      <h1 class="header-logo">CheckTeritory</h1>
        <nav class="header-nav">
            <ul class="header-list">
                <li class="header-item"><a href="">ログイン</a></li>
            </ul>
        </nav>
      </header>




      {/* ここから下　画面が変わる時にどこに飛ぶのかを教えてあげるプログラム */}
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Link to="/join">Join</Link>

      
      <Routes>
        <Route exact path="/" element={<JoinRoom/>}/>
          {/* /のアドレスが入力されたらHomeScreen（Home.jsx)に移動する */}

        <Route path='/main' element={<MainScreen/>}/>
          {/* /mainのアドレスが入力されたらMainScreen（Main.jsx)に移動する */}
        <Route path='/join' element={<HomeScreen/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

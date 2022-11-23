import logo from './logo.svg';
import "./reset.css"
import "./App.css"


import { BrowserRouter, Link,  Route,Switch } from "react-router-dom";

import HomeScreen from "./components/Home"
import MainScreen from "./components/Main"
import JoinRoom from './components/JoinRoom';




// プログラムの一番上、ヘッダー部分だけを実装するプログラム
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <header>
      <h1 class="header-logo">MySeat!</h1>
        <nav class="header-nav">
            <ul class="header-list">
                <li class="header-item"><a href="">自習室</a></li>
                <li class="header-item header01-item--contact"><a href="">なんか</a></li>
            </ul>
        </nav>
      </header>




      {/* ここから下　画面が変わる時にどこに飛ぶのかを教えてあげるプログラム */}
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Link to="/join">Join</Link>

      
      <Switch>
        <Route exact path="/">
          {/* /のアドレスが入力されたらHomeScreen（Home.jsx)に移動する */}
          <HomeScreen />
        </Route>
        <Route path='/main'>
          {/* /mainのアドレスが入力されたらMainScreen（Main.jsx)に移動する */}
          <MainScreen />
        </Route>
        <Route path='/join'>
          <JoinRoom />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

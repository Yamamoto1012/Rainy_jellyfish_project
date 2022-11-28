import React from 'react';              //Reactを読み込んでいる
import { useLocation } from 'react-router-dom';
import JoinRoom from './JoinRoom';


const Main = () => {
    const location = useLocation();
    const id = Number(location.state)
    return(
        <div>
            <h2>{id}</h2>
        </div>
    )
}
export default Main;
import { render } from '@testing-library/react';
import React from 'react';              //Reactを読み込んでいる
import { useLocation } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import "../components/css/main.css"
import chairIcon from '../images/chair.PNG'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState ,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router';
import {getDatabase ,ref ,set,onValue,getFirebase,push} from "firebase/database";

//このプログラムは表の画面で、座席の混雑状況を把握できる。

function Main(){
    const location = useLocation(); //座席表作成画面で飛んできた時に必要になるパス
  
    let todos = []
    let seatStatus = useRef()
    const [count,setCount] = useState(0);
    let roomnameRef = useRef();
    let postKey = useRef();
    let toUid = useRef();
    let inroomName = useRef();

    const roomKey = String(location.getRoomOwnername)
    const roomName = location.state
    roomnameRef = roomName["getRoomname"];
    postKey = roomName["postKey"];
    toUid = roomName["myuid"];

    const db = getDatabase();
    const starCountRef = ref(db, "users/"+toUid + "/" + postKey);
    onValue(starCountRef, (snapshot) => {
        if(snapshot){
        const data = snapshot.val();
        inroomName = data["getRoomname"];
        if(data["data"]){
            seatStatus = data["data"]
        }
        
        }else{
            console.log("存在しない")
        }
        

    });

    function changeStatus(props){
        if(seatStatus[props] === undefined){
            //もし押したボタンのIDに値が入っていなかったら
            seatStatus[props] = true;
        }else{
            //もし押したボタンIDに値が入っていたら
            if(seatStatus[props]){
                //押したボタンがTRUEだったら
                seatStatus[props] = false;
                // console.log("truemy false");
            }else{
                seatStatus[props] = true;
                // console.log("truemy hera");
            }
        }
        setCount((prevCount) => prevCount + 1)
    }

    const SeatItem = (props) =>{
        const getstatus = props.setstatus;
        const getId = props.id;
        console.log(seatStatus)
        if(seatStatus[getId] == true){

            return(
                    <button className='box-Item ful' onClick={() => changeStatus(getId)}></button>
            )
        }else{
            return(
                    <button className='box-Item' onClick={() => changeStatus(getId)}></button>
            )
        }
        
    }
    const ClickSeatBox = () =>{
        // const [todosState,setTodosState] = useState([]);
        for(let i = 0;i < 3000;i++){
            todos[i] = (<SeatItem id={i}/>)
        }
        return(todos)
    }

    return(
        <div>
            <section>
            <div className='title'>
                <h2>金沢工業大学自習室の座席状況</h2>
                <div className='itemtitle'>
                    <img src={chairIcon} />
                    <p>90%</p>
                </div>
            </div>
            <div className='seatrender'>
                <div className='item'>
                    <ClickSeatBox/>
                </div>
            </div>
            <div className='title'>
                <h2>分析</h2>

            </div>
            <p>今日はいつもと比べて空いてるよ！</p>
            </section>
            
        </div>
    )
}
export default Main;
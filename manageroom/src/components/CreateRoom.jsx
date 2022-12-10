import React from 'react';              //Reactを読み込んでいる
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';


const CreateRoom = () =>{
    const {user} = useAuthContext();
    let returnvalue = {

    };
    function sayhello(id){
        console.log(returnvalue[id])
        if(returnvalue[id] == (<SeatBox setseat="nothing"/>)){
            console.log("なし")
        }
    }
    const SeatBox = (props) =>{
        var seatstatus = props.setseat;
        var id = props.id;
        if(seatstatus == "true"){
            return(
                <button className='box-Item'></button>
              )
        }else if(seatstatus == "false"){
            return(
                
                <button className='box-Item ful' onClick={() => sayhello(id)}></button>
            )
        }else if(seatstatus == "nothing"){
            return(
                <button className='box-Item nothing' onClick={() => sayhello(id)}></button>
            )
        }
        
    }
    
    const SeatRendar= ()=>{
        for (let i = 0;i < 3000;i++){
            if(returnvalue[i] === undefined){
                returnvalue[i] = {component: (<SeatBox setseat="false" id={i}/>)};
            }
            // console.log(returnvalue)
        }
        
        
        return(returnvalue[1]["component"]);
    }
    const JudgeDisplay = ()=>{
        if(user){
            return(
                <>
                <h2>What is RoomName?</h2>
                <input type="text"></input>
                <h2>What is ownerName?</h2>
                <input type="text"></input>
                <h2>What is ownerName?</h2>
                <input type="text"></input>
                <section>
                    <div className='title'>
                        <h2>zaseki settei</h2>

                    </div>
                    <p>色が塗られている範囲を自動検出して部屋のサイズを決定します。max横*縦(30*100)</p>
                    <div className='seatrender'>
                        <div className='item'>
                            <SeatRendar/>
                        </div>
                    </div>
                </section>
                <button>zaseki settei</button>
                </>
            )
        }else{
            return(
                <><h2>roguinnashi</h2></>
            )
        }
    }

  
    
    return(
        <div>
            <h1>Hello!</h1>
            {/* <button onClick={logout}>roguaut</button> */}
            <JudgeDisplay/>
        </div>
    )
}
 
export default CreateRoom;
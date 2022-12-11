import React from 'react'
import "../reset.css"
import "./css/joinStyle.css"
import { useNavigate } from 'react-router';
import qrIcon from '../images/qricon.PNG'
import {getDatabase ,ref ,set,onValue} from "firebase/database";
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import LOGO from '../images/logo.PNG'



const JoinRoom = () =>{
  
  var [roomId,inputroomId] = useState("aho");

  const [keySt,inputKey] = useState("");
  const navigation  = useNavigate();


  const isExist = () => {
    const db = getDatabase();
    const getvalue = ref(db,"users/"+"taku/"+"roomId/roomkey");
    onValue(getvalue,(snapshot) =>{
      const data = snapshot.val()
      
      if(data == null){
        alert("data nothing")
      }else{
        if(data != keySt){
          alert("miss your key")
        }else{
          //画面遷移
          navigation("/main",{state:2});

        }
      }
    })
  }


    return (
      <div>
            <div className="card">
                  <div className='content'>
                  <img src={LOGO} />
                  <input type="name" placeholder="room seacret word.." value={keySt} onChange={(event) => inputKey(event.target.value)}/>
                  
                  <div className='submitRoomKey' onClick={isExist}>混雑状況を確認</div>
                  <div className="gray">
                      <a href="./create">Create a Seacret MySeat Profile</a>
                  </div>
                  <div className='sectionline'>
                      <div className='line'></div>
                      <div className='text'>OR</div>
                      <div className='line'></div>
                  </div>
                  <div className='qrimage'>
                    <a href='loadqr'><img src={qrIcon}></img></a>
                  </div>
                  </div>
              </div>
      </div>
    );

  
}

export default JoinRoom;
import React from 'react'
import "../reset.css"
import "./css/joinStyle.css"
import { initializeApp } from "firebase/app";
import {Link} from "react-router-dom";

import qrIcon from '../images/qricon.PNG'
import {getDatabase ,ref ,set,onValue} from "firebase/database";
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import Main from './Main';




const JoinRoom = () =>{

  const [keySt,inputKey] = useState("");

  const upData = () =>{
    const db = getDatabase();
    set(ref(db,"users/"+"aho/"+"tinch"),{
      username: "aho",
      boke: "bokeh",
      kasu: "kasu"
    });
  }

  const isExist = () => {
    const db = getDatabase();
    const getvalue = ref(db,"users/aho/boke");
    onValue(getvalue,(snapshot) =>{
      const data = snapshot.val()
      
      if(data == null){
        alert("data nothing")
      }else{
        if(data != keySt){
          alert("miss your key")
        }else{
          //画面遷移
          window.location.href="/main"

        }
      }
    })
  }


    return (
      <div>
            <div className="card">
                  <div className='content'>
                  <h1>Check!</h1>
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
                    <img src={qrIcon} onClick={upData}></img>
                  </div>
                  </div>
              </div>
      </div>
    );

  
}

export default JoinRoom;
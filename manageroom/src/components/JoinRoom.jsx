import React from 'react'
import "../reset.css"
import "./css/joinStyle.css"
import { initializeApp } from "firebase/app";

import qrIcon from '../images/qricon.PNG'
import {getDatabase ,ref ,set} from "firebase/database";




const JoinRoom = () =>{

  const upData = () =>{
    const db = getDatabase();
    set(ref(db,"users/"+"aho/"+"tinch"),{
      username: "aho",
      boke: "bokeh",
      kasu: "kasu"
    });
  }


    return (
      <div>
            <div className="card">
                  <div className='content'>
                  <h1>Check!</h1>
                  <input type="name" placeholder="room seacret word.."/>
                  
                  <div className='submitRoomKey'>混雑状況を確認</div>
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
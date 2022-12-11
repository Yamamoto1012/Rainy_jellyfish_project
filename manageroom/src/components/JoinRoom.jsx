import React from 'react'
import "../reset.css"
import "./css/joinStyle.css"
import { useNavigate } from 'react-router';
import qrIcon from '../images/qricon.PNG'
import {getDatabase ,ref ,set,onValue} from "firebase/database";
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import LOGO from '../images/logo.PNG'
import { useRef } from 'react';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const JoinRoom = () =>{
  
  var [roomId,inputroomId] = useState("aho");

  const keySt = useRef();
  const navigation  = useNavigate();


  const isExist = () => {
    const db = getDatabase();
    const getvalue = ref(db,"users/keylist/"+keySt.current.value);
    onValue(getvalue,(snapshot) =>{
      const data = snapshot.val()
      console.log(data)
      if(data == null){
        alert("data nothing")
      }else{
        alert("dataあり！")
        // console.log(data);
     
          // 画面遷移
          navigation("/main",{state: data});
      }
    })
  }



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



    return (
      <div>
   
            <div className="card">
                  <div className='content'>
                  <img src={LOGO} />
                  <input type="name" placeholder="room seacret word.." ref={keySt}/>
                  
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
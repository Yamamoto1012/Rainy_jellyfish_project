import React from 'react';              //Reactを読み込んでいる
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

const CreateRoom = () =>{
    const [loginbool,setLoginBool] = useState("false");
    let a = "false";
    const JudgeDisplay = ()=>{
        const auth =getAuth();
        
        onAuthStateChanged(auth,(user) =>{
            if(user){
               a = true; 
            }else{
                
            }  
        });
        
        
        
      

        
    }
  
    
    return(
        <div>
            <h1>ere</h1>
            <JudgeDisplay/>
        </div>
    )
}
 
export default CreateRoom;
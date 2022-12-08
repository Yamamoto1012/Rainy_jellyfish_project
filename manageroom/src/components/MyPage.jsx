import React, { useState } from 'react'

import { getAuth, onAuthStateChanged ,updateProfile} from "firebase/auth";
import { useRef } from 'react';
import Alert from './Alert';

export const MyPage = () => {
    const auth = getAuth();
    const inputUserNameRef = useRef(null);
    const [displayName,setDisplayName] = useState();
    const [displayNamelocal,setDisplayNameLocal] = useState();
    let isChangedProfilebool = false;
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        const username = user.displayName;
        
        setDisplayName(username);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    const SaveProfile =() =>{
     updateProfile(auth.currentUser, {
            displayName:  inputUserNameRef.current.value
          }).then((userCredential) => {
            // Profile updated!
            const user = auth.currentUser;
            const username = user.displayName;
            setDisplayName(username);
            isChangedProfilebool = true;
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            
          });
            
    }
  return (
    <div>
        <h1>Hi,{displayName}!</h1>
        <input type="text" placeholder="username" name="password" ref={inputUserNameRef}/>  
        <button onClick={SaveProfile}>setusername</button>
    </div>
  )
}

export default MyPage;
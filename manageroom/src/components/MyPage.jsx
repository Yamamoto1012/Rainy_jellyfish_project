import React, { useState } from 'react'

import { getAuth, onAuthStateChanged ,updateProfile,signOut} from "firebase/auth";
import { useRef } from 'react';


export const MyPage = () => {
    const auth = getAuth();
    const inputUserNameRef = useRef(null);
    const [displayName,setDisplayName] = useState();
    const [displayNamelocal,setDisplayNameLocal] = useState();
    let isChangedProfilebool = false;

    //FirbaseAuthの情報を取得
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
    const SignOut = () =>{
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        window.location.replace('../#');
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div>
        <h1>Hi,{displayName}!</h1>
        <input type="text" placeholder="username" name="password" ref={inputUserNameRef}/> 
        <button onClick={SaveProfile}>setusername</button>
        <h2>作成した座席表一覧</h2> 
        <h2>アカウント処理</h2>
        <button onClick={SignOut}>SignOut</button>
    </div>
  )
}

export default MyPage;
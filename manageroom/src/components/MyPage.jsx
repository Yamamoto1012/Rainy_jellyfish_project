import React, { useState } from 'react'

import { getAuth, onAuthStateChanged ,updateProfile} from "firebase/auth";

export const MyPage = () => {
    const auth = getAuth();
    const [displayName,setDisplayName] = useState()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateProfile(auth.currentUser, {
            displayName: "TakuchanUser"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

        const uid = user.uid;
        const username = user.displayName;
        
        setDisplayName(username);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  return (
    <div>
        <h1>Hi,{displayName}!</h1>
    </div>
  )
}

export default MyPage;
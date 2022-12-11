import React from 'react';              //Reactを読み込んでいる
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState ,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import {getDatabase ,ref ,set,onValue,getFirebase,push, update} from "firebase/database";

const CreateRoom = () =>{

    const {user} = useAuthContext();
    let todos = []
    let seatStatus = useRef()
    const [count,setCount] = useState(0);
    const roomname = useRef();
    const roomOwnerName = useRef();
    const roomkey = useRef();

    const navigation  = useNavigate();

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
        console.log(seatStatus);
    }
    function CreateDatabase() {
        if(roomname.current.value && roomOwnerName.current.value && roomkey.current.value){
            // const db = getDatabase();
            // set(ref(db,"users/"+"takumi"+"/roomId"),{
            //     roomkey:"hogehoge",
            //     roomname: roomname.current.value,
            //     roomOwner:roomOwnerName.current.value,
            //     seat: seatStatus,
            //     data: "data"
            //   });

            const datas = Object.assign({},seatStatus);
            delete datas.current;
            

            const getRoomname = roomname.current.value.toString(); //Roomの乱数ID格納BOX
            const getRoomOwnername = roomOwnerName.current.value.toString();
            const getRoomKey = roomkey.current.value.toString();
            const myuid = user.uid;
            const db = getDatabase();
            const dbref = ref(db,"users/"+user.uid);
            const newPostRef = push(dbref);

            const postKey = newPostRef.key;
            set(newPostRef,{
            getRoomOwnername,
            getRoomname,
            getRoomKey,
            data: datas,
            });

            const starCountRef = ref(db, 'users/keylist');
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              const maindbRef = ref(db,"users/keylist/" + getRoomKey);
              if(data == null){
                set(maindbRef,{getRoomname,postKey,myuid});
                console.log("新しくデータベース作成 keylist");
              }else{
                update(maindbRef,{getRoomname,postKey,myuid});    
                console.log("データベース更新 keylist");
              }
            });

            navigation("/main",{roomkey:getRoomKey,postkey: postKey ,uid:myuid});

            

                  
        }else{
            alert("入力漏れがあります")
        }
    }
    const SeatItem = (props) =>{
        const getstatus = props.setstatus;
        const getId = props.id;
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
    const JudgeDisplay = ()=>{
        if(user){
            return(
                <>
                <section>
               <div className='title'>
                        <h2>座席設定 「最大 横30×縦100」</h2>
                    </div>
                    <div className='seatrender'>
                        <div className='item'>
                            {/*ここにBoxItemが入る */}
                            <ClickSeatBox/>
                        </div>
                    </div>
                    
                   
                <h2>自習室名</h2>
                <input type="text" ref={roomname}></input>
                <h2>管理者名</h2>
                <input type="text" ref={roomOwnerName}></input>
                <h2>ルームキー（このキーを入力すると誰でも自習室状況を確認できるようになります。記号、大小文字、数字を使うことをおすすめします）</h2>
                <input type="text" ref={roomkey} placeholder="日本語可。"></input>
                <div className='paddingBig'>
                    <div className='createbutton radius' onClick={CreateDatabase}>座席作成</div>
                </div>
                
                    
                </section>
                
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
            <JudgeDisplay/>
        </div>
    )
}
 
export default CreateRoom;
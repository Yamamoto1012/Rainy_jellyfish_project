import React from 'react';              //Reactを読み込んでいる
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState ,useEffect,useRef} from 'react';
import { useAuthContext } from '../context/AuthContext';


const CreateRoom = () =>{
    const {user} = useAuthContext();
    let todos = []
    let seatStatus = useRef()
    const [count,setCount] = useState(0);

   
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
        
        console.log(seatStatus);
        setCount((prevCount) => prevCount + 1)
        
    }
    const SeatItem = (props) =>{
        const getstatus = props.setstatus;
        const getId = props.id;
        if(seatStatus[getId] == true){
            console.log(getId +"ここはTrue");
            return(
                <div>
                    <button className='box-Item ful' onClick={() => changeStatus(getId)}>{getId}</button>
                </div>
            )
        }else{
            return(
                <div>
                    <button className='box-Item' onClick={() => changeStatus(getId)}>{getId}</button>
                </div>
            )
        }
        
    }
    const ClickSeatBox = () =>{
        // const [todosState,setTodosState] = useState([]);
        for(let i = 0;i < 20;i++){
            todos[i] = (<SeatItem id={i}/>)
        }
        return(todos)
    }
    const JudgeDisplay = ()=>{
        if(user){
            return(
                <>
                <h2>自習室名</h2>
                <input type="text"></input>
                <h2>管理者名</h2>
                <input type="text"></input>
                <section>
                    <div className='title'>
                        <h2>座席設定</h2>
                    </div>
                    <div className='seatrender'>
                        <div className='item'>
                            {/*ここにBoxItemが入る */}
                            <ClickSeatBox/>
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
            <JudgeDisplay/>
        </div>
    )
}
 
export default CreateRoom;
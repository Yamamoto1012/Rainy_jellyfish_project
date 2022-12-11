import { render } from '@testing-library/react';
import React from 'react';              //Reactを読み込んでいる
import { useLocation } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import "../components/css/main.css"
import chairIcon from '../images/chair.PNG'

//このプログラムは表の画面で、座席の混雑状況を把握できる。

const Main = () => {
    const location = useLocation(); //座席表作成画面で飛んできた時に必要になるパス
    const id = Number(location.state)
    
    
    const SeatBox = (props) =>{
        var seatstatus = props.setseat;
        if(seatstatus == "true"){
            return(
                <div className='box-Item'></div>
              )
        }else if(seatstatus == "false"){
            return(
                <div className='box-Item ful'></div>
            )
        }else if(seatstatus == "nothing"){
            return(
                <div className='box-Item nothing'></div>
            )
        }
        
    }
    const SeatRendar= ()=>{
        const number =[]
        for (let i = 0;i < 3000;i++){
            if(i % 2 == 0){
                if(i % 4 == 0){
                    number.push(<SeatBox setseat="false"/>)
                }else{
                    number.push(<SeatBox setseat="nothing"/>)
                }
            }else{
                number.push(<SeatBox setseat="true"/>)
            }
        }
        return(number)
    }
    
    return(
        <div>
            <section>
            <div className='title'>
                <h2>金沢工業大学自習室の座席状況</h2>
                <div className='itemtitle'>
                    <img src={chairIcon} />
                    <p>90%</p>
                </div>
            </div>
            <div className='seatrender'>
                <div className='item'>
                    <SeatRendar/>
                </div>
            </div>
            <div className='title'>
                <h2>分析</h2>

            </div>
            <p>今日はいつもと比べて空いてるよ！</p>
            </section>
            
        </div>
    )
}
export default Main;
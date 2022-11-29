import { render } from '@testing-library/react';
import React from 'react';              //Reactを読み込んでいる
import { useLocation } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import "../components/css/main.css"


//このプログラムは表の画面で、座席の混雑状況を把握できる。


const Main = () => {
    const location = useLocation();
    const id = Number(location.state)
    const data = [ 'foo', 'bar', 'baz' ];
    const SeatBox = () =>{
        var bol = false;
        // if(props.isexistData == null){
            
        // }else{
        //     bol = true;
        // }
        return(
          <div className='box-Item'>空</div>
        )
    }
    const Renderr= ()=>{
        return(
            <div>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>
            <SeatBox/>


            </div>
        )
    }
    
    return(
        <div>
            <section>
            <Renderr/>
            </section>
            
        </div>
    )
}
export default Main;
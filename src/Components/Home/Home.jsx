import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Home.css"
import {motion} from "framer-motion"
import Cloud from "./Cloud.jsx"

function Home(){

    //generating values for clouds
    let initial_posi = []
    let final_posi = []
    let initial_posi_y = []
    let speed = []

    for(let i = 0; i<4; i++){
        initial_posi_y[i] = Math.floor((Math.random() * window.screen.height)/10)
        speed[i] = Math.floor(Math.random() * 50);
    }
    return(
        <div className='sky'>
            {initial_posi_y.map((posi, index) => {
                return(<Cloud initial_posi_y = {initial_posi_y[index]} speed = {speed[index]} ></Cloud>)
            })}

            <h1>test</h1>
            
        </div>
    )
}

export default Home
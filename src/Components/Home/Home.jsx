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
    for(let i = 0; i<4; i++){
        initial_posi[i] = Math.floor(Math.random() * window.screen.width/2)
        final_posi[i] = initial_posi[i] + Math.floor(Math.random() * window.screen.width/2)
        initial_posi_y[i] = Math.floor(Math.random() * window.screen.height/2)
    }
    return(
        <div className='sky'>
            {initial_posi.map((posi, index) => {
                return( <Cloud initial_posi = {initial_posi[index]} final_posi = {final_posi[index]} initial_posi_y = {initial_posi_y[index]} ></Cloud>)
            })}

            <h1>test</h1>
            
        </div>
    )
}

export default Home
import React from 'react';
import "./Home.css"
import Cloud from "./Cloud.jsx"

function Home(){

    //generating values for clouds
    let initial_posi = []
    let initial_posi_y = []
    let speed = []

    for(let i = 0; i<4; i++){
        initial_posi_y[i] = Math.floor((Math.random() * window.screen.height)/20)
        initial_posi[i] = Math.floor((Math.random() * window.screen.height))
        speed[i] = 20 + Math.floor(Math.random() * 10);
    }
    return(
        <div className='sky'>

            <div className='rolldown'>
                <div className='sun'></div>

                {initial_posi_y.map((posi, index) => {
                    return(<Cloud initial_posi = {initial_posi[index]} initial_posi_y = {initial_posi_y[index]} speed = {speed[index]} ></Cloud>)
                })}

                <div className='content'>
                    <div className='title'>
                        <h1>Hi, I am Siddharth</h1>
                        <h3>Software Engineer and Web Developer</h3>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Home
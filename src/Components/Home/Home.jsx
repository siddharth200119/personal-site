import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Home.css"
import {motion} from "framer-motion"

function Home(){
    return(
        <div className='sky'>
            <motion.div 
            animate={{
                x: window.screen.width,
            }}
            initial={{
                x: 0,
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
            }}
            >
                <img className='cloud' src={process.env.PUBLIC_URL + "Cloud.png"}></img>
            </motion.div>

            <h1>test</h1>
            
        </div>
    )
}

export default Home
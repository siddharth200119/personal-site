import React from "react";
import { motion } from "framer-motion";
import "./Home.css"

function Cloud(props){
    return(
        <div>
            <motion.div 
            animate={{
                x: window.screen.width + 100,
            }}
            initial={{
                x: 0,
                y: props.initial_posi_y
            }}
            transition={{
                duration: ((window.screen.width+ 200)/props.speed),
                repeat: Infinity,
            }}
            >
                <img className='cloud' src={process.env.PUBLIC_URL + "Cloud.png"}></img>
            </motion.div>
        </div>
    )
}

export default Cloud
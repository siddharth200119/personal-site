import React from "react";
import { motion } from "framer-motion";
import "./Home.css"

function Cloud(props){
    return(
        <div>
            <motion.div 
            animate={{
                x: props.final_posi,
            }}
            initial={{
                x: props.initial_posi,
                y: props.initial_posi_y
            }}
            transition={{
                duration: (props.final_posi - props.initial_posi)/50,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
            }}
            >
                <img className='cloud' src={process.env.PUBLIC_URL + "Cloud.png"}></img>
            </motion.div>
        </div>
    )
}

export default Cloud
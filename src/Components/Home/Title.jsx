import React from "react";
import "./Title.css"

function Title(props){
    return(
        <div className="section-title">
            <h1>{props.titlename}</h1>
        </div>
    )
}

export default Title
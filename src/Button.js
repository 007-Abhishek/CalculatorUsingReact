import React from "react";
import './Style.css';

function Button(props){
    return(
        <div>
            <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
        </div>
    )
}

export default Button;
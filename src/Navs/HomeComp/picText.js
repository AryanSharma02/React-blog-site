import React from "react";
import "./picText.css";
import Image from "../../images/card.jpg";
function picText(props){
    return(
        <>
        <hr/>
        <div className="cont11 ">
            <div className="image11 "><img src={props.images}/></div>
            <div className="text11 ">
                <p className="he1">{props.heading}</p> 
                <p className="he2">Gujarat is a vastly underrated and it's a mystery to us why the region isn't more well-
                </p>
                    <p className="he3">Travel / <span> August 21 2017</span> </p>
            </div>
        </div>
        </>
    );
}

export default picText;
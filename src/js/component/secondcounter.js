import React from "react";

function SecondCounter({seconds}){
    return(
        <div className="p-3 bg-black">
            <p>{seconds}</p>
        </div>
    );
}

export default SecondCounter;
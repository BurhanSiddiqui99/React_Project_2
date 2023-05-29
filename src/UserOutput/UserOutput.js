import React from "react";
import './UserOutput.css'
const userOutput = (props) =>{
    return <div className="UserOutput">
        <p>Username: {props.userName}</p>
        <p>This is React Assignment</p>
        <p>Burhan Al Haq Siddiqui</p>
    </div>
}
export default userOutput;
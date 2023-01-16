//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds1 = 0;
let seconds2 = 0;
let seconds3 = 0;

setInterval(function(){
    seconds1++ 
    if (seconds1 === 10){
        seconds2++
        seconds1 = 0
    } 
    if (seconds2 === 10){
        seconds3++
        seconds2 = 0
    }
    //render your react application
    ReactDOM.render(<SecondsCounter
        seconds1={seconds1}
        seconds2={seconds2}
        seconds3={seconds3}
         />, 
         document.querySelector("#app"));
},1000);

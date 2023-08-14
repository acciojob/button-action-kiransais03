import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  let [tag,setTag]=useState("hide");

  function click (){
    if(tag==="hide"){setTag("show")}
    else {setTag("hide");}
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick={click}>Toggle</button>
      <p id="para" className={tag}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(false);
  const [vent, setVent] = useState(false);
  
  const sett = [];
  function handleAdd() {
    var flag = 0;
    var t = document.getElementById("cmb2").value;
    for (var i = 0; i < sett.length; i++) {
      if (sett[i] === t) {
        flag = 1;
      }
    }
    if (flag === 0) {
      sett.push(t);
      var newinput = "<input type='text' id='id_" + t + "'><br/><br/>";
      document.getElementById("newforms").innerHTML += newinput;
    }
  }

  function decrease() {
    var x = document.getElementById("cmb").value;
    
    if (x === "Sensor" ) {

      
      setCount(true);
      setVent(false);
     
      document.getElementById("hell").style.display = "none";
     

    }else if (x === "Motor") {
        setCount(true);
        setVent(false);
        document.getElementById("hell").style.display = "none";
      } 
    
    
    
    else if (x === "Relay") {
      setCount(true);
      setVent(true);
      if ({ vent }) {
        document.getElementById("hell").style.display = "block";
        document.getElementById("hell").classList.add("chow");
      }
    } else {
      setCount(false);
      document.getElementById("hell").style.display = "none";
    }
  }
  return (
    <div className="container">
      <select onChangeCapture={decrease} id="cmb">
        <option>Choosedevice</option>
        <option>Sensor</option>
        <option>Motor</option>
        <option>Relay</option>
      </select>
      <br />
      <br />
      <input  type={count ? "text" : "hidden"} />
      <br />
      <br />
      <input type={count ? "text" : "hidden"} />
      <br />
      <br />
      <div id="hell">
        <select onChangeCapture={handleAdd} id="cmb2">
          <option>Choose Module</option>
          <option>field1</option>
          <option>field2</option>
          <option>field3</option>
          <option>field4</option>
          <option>field5</option>
          <option>field6</option>
          <option>field7</option>
          <option>field8</option>
          <option>field9</option>
          <option>field10</option>
          <option>field11</option>
          <option>field12</option>
          <option>field13</option>
          <option>field14</option>
          <option>field15</option>
          <option>field16</option>
          <option>field17</option>
          <option>field18</option>
          <option>field19</option>
          <option>field20</option>
          <option>field21</option>
          <option>field22</option>
          <option>field23</option>
          <option>field24</option>
          <option>field25</option>
          <option>field26</option>
          <option>field27</option>
          <option>field28</option>
          <option>field29</option>
          <option>field30</option>
          <option>field31</option>
          <option>field32</option>
         


        </select>
        <br />
      <div id="newforms"></div>
      </div>
     
    </div>
  );
}

export default App;
import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  const [name, setName] = useState(" ");

const onInputChange=(e)=>{
    setName(e.target.value);

};
const onInputClick=(e)=>{
 onInputChange(e.target.value);
};
  return (
    <div id="main">
      <input id='input' onChange={onInputChange}></input>
      <button id='button' onClick={onInputClick}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;

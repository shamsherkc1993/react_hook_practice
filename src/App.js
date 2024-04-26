import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrayWithUseState from './component/ArrayWithUseState';
import UseStateObject from './component/UseStateObject';
import ShortCircuitEvaluation from './component/ShortCircuitEvaluation';
import Login from './component/Login';
import ApiPractice from './component/ApiPractice';
import UseEffect from './component/UseEffect';


function App() {
  const [myName, setMyName] = useState('shamsher kc')
  let value = myName;
  const changeText = () => {
  // if (value === "shamsher kc") {
  //   setMyName('i am from tokyo')
  // } else {
  //   setMyName('shamsher kc')
  // }

  //if value is true and if value is false run another
  value === "shamsher kc" ?
    setMyName('i am from tokyo') : setMyName('shamsher kc')
  }
const data = [
  {
    id : 1, name : "ram"
  },
  {
    id : 2, name : "victor"
  },
  {
    id : 3, name : "ramesh"
  },
  {
    id : 4, name : "padam"
  }
]

  return (
    <div className='container'>
      <div className='row'>
         {/* <h1> { myName } </h1>
        <button type="button" className="btn btn-primary" onClick={changeText}>Primary</button> */}
        {/* <ArrayWithUseState /> */}
        {/* <UseStateObject /> */}
        {/* <ShortCircuitEvaluation /> */}
        {/* <Login /> */}
        <ApiPractice />
        {/* <UseEffect /> */}

      </div>
    </div>
  );
}

export default App;

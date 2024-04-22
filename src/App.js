import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let txt = "shamsher kc";
  const [myName, newMyName] = useState('shamsher kc')
  console.log(useState('I am from tokyo'))

  const changeText = () => {
    // txt = "I am from tokyo";
    // alert(txt)
    newMyName('I am from tokyo')

  }
  return (
    <div className='container'>
      <div className='row'>
         <h1> { myName } </h1>
        <button type="button" className="btn btn-primary" onClick={changeText}>Primary</button>

      </div>
    </div>
  );
}

export default App;

import React from 'react'


//use spread operator with array
const UseStateObject = () => {
    const [myObject, setMyObject] = React.useState({
        name : "shamsher", address : "tokyo", age : 28, height : 6, status : "single"
    });
    const changeText = () =>{
        setMyObject({...myObject, name: "kc", status: "married"})
    }
  return (
    <div>
      <h1>Name : {myObject.name}, Address:{myObject.address} , Age : {myObject.age}, height:{myObject.height} , status:{myObject.status} </h1>
      <button className='btn btn-danger' onClick={changeText} >Update</button>
    </div>
  )
}

export default UseStateObject

import React, { useState } from 'react';

//using array with map method
const ArrayWithUseState = () => {

    const bioData = [
        {
            id: 0,
            name : "shamsher",
             address : "tokyo"
        },
        {
            id: 0,
            name : "rakesh",
             address : "delhi"
        },
        {
            id: 0,
            name : "rabin",
             address : "ktm"
        },
        {
            id: 0,
            name : "urmila",
             address : "dang"
        }
    ];

    const [myArray, setMyArray] = useState(bioData);

    const clearArray = () => {
        setMyArray([]);
    }
  return (
    <div>
        <div class="form-group">
            {
                myArray.map((currentElem) => {
                    return <h1>Name : {currentElem.name} & address : {currentElem.address}</h1>
                })
            }
            <button className='btn btn-danger' onClick={clearArray}>Clear data</button>
        </div>
    </div>
  )
}

export default ArrayWithUseState

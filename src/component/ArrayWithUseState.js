import React, { useState } from 'react';

//using array with map method
//added single line delete method, use filter method to delete single data
const ArrayWithUseState = () => {

    const bioData = [
        {
            id: 0,
            name : "shamsher",
             address : "tokyo"
        },
        {
            id: 1,
            name : "rakesh",
             address : "delhi"
        },
        {
            id: 2,
            name : "rabin",
             address : "ktm"
        },
        {
            id: 3,
            name : "urmila",
             address : "dang"
        }
    ];

    const [myArray, setMyArray] = useState(bioData);

    const clearArray = () => {
        setMyArray([]);
    }

    const removeElem = (id) => {
        const myNewData = myArray.filter((myElement)=>{
            return myElement.id != id;
        })

        setMyArray(myNewData);

    }
  return (
    <div>
        <div class="form-group">
            {
                myArray.map((currentElem) => {
                    return <h1>Name : {currentElem.name} & address : {currentElem.address}
                    <button className='btn btn-primary' onClick={ () => removeElem(currentElem.id)}>Remove</button>
                    </h1>
                })
            }
            <button className='btn btn-danger' onClick={clearArray}>Clear data</button>
        </div>
    </div>
  )
}

export default ArrayWithUseState
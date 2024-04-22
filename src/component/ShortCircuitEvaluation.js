import React, {useState} from 'react'

const ShortCircuitEvaluation = () => {

    const [demo, setDemo] = useState("")
  return (
    <div>

        {/* if value is matched either for one, it will show that and it will show the value of left side */}
      <h1>{demo || 
        <>
            <p>you can do anything</p>
            <p>you can do anything</p>

            <p>you can do nsjrk</p>

        </>
      }</h1> 

      {/* check both conditions and if it is true then it will show the value of right side */}
      <h1>{demo && "ramesh"}</h1>

    </div>
  )
}

export default ShortCircuitEvaluation
